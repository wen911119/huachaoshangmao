import { h, Component } from 'preact'
import style from './style'
import {
  XCenterView,
  SlotColumnView,
  RowView,
  SlotRowView
} from '@ruiyun/preact-layout-suite'
import Icon from '@ruiyun/preact-icon'
import Text from '@ruiyun/preact-text'
import Logo from '../../components/logo'
import Menu from '../../components/menu'
import Line from '@ruiyun/preact-line'
import Block from '../../components/block'
import Item1 from './item1'
import Item2 from './item2'

const style1 = {
  backgroundImage:
    'url("//hc.ruiyun2015.com/assets/bg1.jpg")',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundColor: 'transparent'
}

const year = new Date().getFullYear()

export default class Home extends Component {
  state = {
    menuIndex: 0,
    config: {
      blocks: []
    }
  }
  onMenuChange = index => {
    this.setState({
      menuIndex: index
    })
  }
  componentWillMount () {
    fetch('//hc.ruiyun2015.com/config.json')
      .then(response => response.json())
      .then(myJson => {
        this.setState({ config: myJson })
      })
  }
  render ({}, { config, menuIndex }) {
    const menus = config.blocks.map(b => b.title)
    return (
      <div class={style.home}>
        <Logo
          logo="icon-hc"
          logoColor="#e09a0c"
          logoSize={80}
          brand="华超商贸"
          brandSize={30}
          brandColor="#000"
        />
        <Menu
          titles={menus}
          activeIndex={menuIndex}
          onSelect={this.onMenuChange}
        />
        {config.blocks.map(block => {
          if (block.type === 'b1') {
            return (
              <div id={block.title}>
                <XCenterView height={1100} style={style1}>
                  <SlotColumnView slot={40} hAlign="center" width="80%">
                    <Text color="#fff" size={72} style={{ fontWeight: 700 }}>
                      {block.title}
                    </Text>
                    <Line color="#fff" scale={2.2} indent={[230, 230]} />
                    <Text color="#fff" size={32}>
                      {block.content}
                    </Text>
                  </SlotColumnView>
                </XCenterView>
              </div>
            )
          }
          else if (block.type === 'b2') {
            return (
              <div id={block.title}>
                <Block
                  title={block.title}
                  titleColor="#000"
                  bgColor={block.bgColor}
                >
                  <SlotColumnView padding={[0, 40, 0, 40]} slot={30}>
                    {block.content.map((b, i) => (
                      <Item1 key={i} {...b} />
                    ))}
                  </SlotColumnView>
                </Block>
              </div>
            )
          }
          else if (block.type === 'b3') {
            return (
              <div id={block.title}>
                <Block
                  title={block.title}
                  titleColor="#000"
                  bgColor={block.bgColor}
                >
                  <RowView
                    padding={[0, 40, 0, 40]}
                    style={{ flexWrap: 'wrap' }}
                    hAlign="space-between"
                    vAlign="flex-start"
                  >
                    {block.content.map((p, i) => (
                      <Item2 key={i} {...p} />
                    ))}
                  </RowView>
                </Block>
              </div>
            )
          }
          else if (block.type === 'b4') {
            return (
              <div id={block.title}>
                <Block
                  title={block.title}
                  titleColor="#fff"
                  bgImage="//hc.ruiyun2015.com/assets/bg2.jpg"
                >
                  <RowView hAlign="center">
                    <Text size={32} color="#fff">
                      {block.content.tip}
                    </Text>
                  </RowView>
                  <SlotColumnView padding={[60, 80, 80, 80]} slot={40}>
                    <SlotRowView slot={25}>
                      <Icon name="icon-dingweiweizhi" color="#fff" />
                      <Text size={32} color="#fff">
                        {block.content.address}
                      </Text>
                    </SlotRowView>
                    <SlotRowView slot={25}>
                      <Icon name="icon-shouji" size={32} color="#fff" />
                      <Text size={32} color="#fff">
                        {block.content.mobile}
                      </Text>
                    </SlotRowView>
                    <SlotRowView slot={25}>
                      <Icon name="icon-wechat" size={38} color="#fff" />
                      <Text size={32} color="#fff">
                        {block.content.wechat}
                      </Text>
                    </SlotRowView>
                  </SlotColumnView>
                </Block>
              </div>
            )
          }
        })}
        <XCenterView height={280}>
          <Text size={30} color="#50555c">
            {`Copyright © 2009 - ${year}. All rights reserved.`}
          </Text>
        </XCenterView>
      </div>
    )
  }
}
