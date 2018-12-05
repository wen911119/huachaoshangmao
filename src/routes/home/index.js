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

const businesses = [
  {
    img:
      '//user-assets.sxlcdn.com/images/489034/Fk-NsEx9aX7Mdg-FB2rWYpeGBokm.jpg?imageMogr2/strip/auto-orient/thumbnail/720x1440>/interlace/1/format/jpeg',
    title: '南宝油漆',
    desc:
      '高遮盖性，超白亮显高遮盖性，超白亮显高遮盖性，超白亮显高遮盖性，超白亮显高遮盖性，超白亮显高遮盖性，超白亮显高遮盖性，超白亮显高遮盖性，超白亮显高遮盖性，超白亮显高遮盖性，超白亮显高遮盖性，超白亮显'
  },
  {
    img:
      '//user-assets.sxlcdn.com/images/80926/Fo6sXzr42_MtPTXnC16_eElAeHw8.png?imageMogr2/strip/auto-orient/thumbnail/720x1440>/quality/90!/format/png',
    title: '冷轧硅钢厂',
    desc:
      '酸轧联合机组可生产厚度为0.18-2mm;宽度为700-1380mm的硅钢和冷硬卷，连续退火涂层机组可生产厚度为0.35-0.65mm;宽度为700-1250mm的冷轧硅钢产品，产品质量、环保等各项技术指标达到国内先进水平。产品能满足中小型电机，是钢铁钢铁行业深加工的优质板材。'
  },
  {
    img:
      '//user-assets.sxlcdn.com/images/80926/Fo6sXzr42_MtPTXnC16_eElAeHw8.png?imageMogr2/strip/auto-orient/thumbnail/720x1440>/quality/90!/format/png',
    title: '冷轧硅钢厂',
    desc:
      '酸轧联合机组可生产厚度为0.18-2mm;宽度为700-1380mm的硅钢和冷硬卷，连续退火涂层机组可生产厚度为0.35-0.65mm;宽度为700-1250mm的冷轧硅钢产品，产品质量、环保等各项技术指标达到国内先进水平。产品能满足中小型电机，是钢铁钢铁行业深加工的优质板材。'
  }
]

const products = [
  {
    img:
      '//user-assets.sxlcdn.com/images/489034/FqiTVIQG1l54bI0km26pFdbBfwa2.jpg?imageMogr2/strip/auto-orient/thumbnail/500x1000%3E/interlace/1/format/jpeg',
    title: '柜门',
    desc:
      '商品描述或者写价格商品描述或者写价格商品描述或者写价格商品描述或者写价格商品描述或者写价格商品描述或者写价格商品描述或者写价格商品描述或者写价格'
  },
  {
    img:
      '//user-assets.sxlcdn.com/images/489034/Fgz-ozkbcX-kTqzcU7Wk8yOnLajA.jpg?imageMogr2/strip/auto-orient/thumbnail/500x1000%3E/interlace/1/format/jpeg',
    title: '隔热板',
    desc: '999.99'
  },
  {
    img:
      '//user-assets.sxlcdn.com/images/489034/FpjZ4Gt2oDcDjv6-Tjv16gdWiZrI.jpg?imageMogr2/strip/auto-orient/thumbnail/500x1000%3E/interlace/1/format/jpeg',
    title: '地砖',
    desc: '商品描述或者写价格'
  },
  {
    img:
      '//user-assets.sxlcdn.com/images/489034/Fk-NsEx9aX7Mdg-FB2rWYpeGBokm.jpg?imageMogr2/strip/auto-orient/thumbnail/500x1000%3E/interlace/1/format/jpeg',
    title: '南宝油漆',
    desc: '商品描述或者写价格'
  }
]

const cases = [
  {
    img:
      '//user-assets.sxlcdn.com/images/80926/FqAAA_03f7vb-I-1TqKA87RQU42i.jpg?imageMogr2/strip/auto-orient/thumbnail/720x1440>/quality/90!/interlace/1/format/jpeg',
    title: '德懋堂',
    desc: '描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下'
  },
  {
    img:
      '//user-assets.sxlcdn.com/images/80926/lowPH6GVQ8VWcOhu3tlc6WY4rZdi.jpg?imageMogr2/strip/auto-orient/thumbnail/720x1440>/quality/90!/interlace/1/format/jpeg',
    title: '客户案例2',
    desc: '描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下'
  },
  {
    img:
      '//user-assets.sxlcdn.com/images/80926/FsVXp9pB0FZRtiFl7-6tUCIHJFSS.jpg?imageMogr2/strip/auto-orient/thumbnail/720x1440>/quality/90!/interlace/1/format/jpeg',
    title: '客户案例3',
    desc: '描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下'
  },
  {
    img:
      '//user-assets.sxlcdn.com/images/80926/Fi3TYKVgh8yF1vy0nOyLKieGIoN6.jpg?imageMogr2/strip/auto-orient/thumbnail/720x1440>/quality/90!/interlace/1/format/jpeg',
    title: '客户案例4',
    desc: '描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下'
  }
]

const style1 = {
  backgroundImage:
    'url("//user-assets.sxlcdn.com/images/80926/Fl5UfHixl_5k5DF-vG-bGB6gKXfb.jpg?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpeg")',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundColor: 'transparent'
}

export default class Home extends Component {
  state = {
    menuIndex: 0
  }
  onMenuChange = index => {
    this.setState({
      menuIndex: index
    })
  }
  render () {
    return (
      <div class={style.home}>
        <Logo
          logo="icon-hc"
          logoColor="#e09a0c"
          logoSize={60}
          brand="华超商贸"
          brandSize={13}
          brandColor="#000"
        />
        <Menu
          titles={['经营理念', '业务范围', '主营产品', '客户案例', '联系方式']}
          activeIndex={this.state.menuIndex}
          onSelect={this.onMenuChange}
        />
        <XCenterView height={1100} style={style1}>
          <SlotColumnView slot={40} hAlign="center" width="80%">
            <Text color="#fff" size={72} style={{ fontWeight: 700 }}>
              经营理念
            </Text>
            <Line color="#fff" scale={2.2} indent={[230, 230]} />
            <Text color="#fff" size={32}>
              “携手客户、回报股东、成就员工、奉献社会”是企业的核心价值观，“敬业、
              忠诚、 团结 、进取”是企业精神，“诚信社会为本
              、客户满意为荣”是企业的经营理念。
            </Text>
          </SlotColumnView>
        </XCenterView>
        <Block title="业务范围" titleColor="#000" bgColor="#e5e5e5">
          <SlotColumnView padding={[0, 40, 0, 40]} slot={30}>
            {businesses.map((b, i) => (
              <Item1 key={i} {...b} />
            ))}
          </SlotColumnView>
        </Block>
        <Block title="主营产品" titleColor="#000" bgColor="#fff">
          <RowView
            padding={[0, 40, 0, 40]}
            style={{ flexWrap: 'wrap' }}
            hAlign="space-between"
            vAlign="flex-start"
          >
            {products.map((p, i) => (
              <Item2 key={i} {...p} />
            ))}
          </RowView>
        </Block>
        <Block title="客户案例" titleColor="#000" bgColor="#e5e5e5">
          <RowView
            padding={[0, 40, 0, 40]}
            style={{ flexWrap: 'wrap' }}
            hAlign="space-between"
            vAlign="flex-start"
          >
            {cases.map((p, i) => (
              <Item2 key={i} {...p} />
            ))}
          </RowView>
        </Block>
        <Block
          title="联系我们"
          titleColor="#fff"
          bgImage="//user-assets.sxlcdn.com/images/80926/FugtL-slXJ-MxmZI0JF62QI1aXIS.jpg?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpeg"
        >
          <RowView hAlign="center">
            <Text size={32} color="#fff">
              如有商务合作，请如按下方式联系我们
            </Text>
          </RowView>
          <SlotColumnView padding={[60, 80, 80, 80]} slot={40}>
            <SlotRowView slot={25}>
              <Icon name="icon-dingweiweizhi" color="#fff" />
              <Text size={32} color="#fff">
                安徽省池州市青阳县蓉城镇豪城国际15栋139号
              </Text>
            </SlotRowView>
            <SlotRowView slot={25}>
              <Icon name="icon-shouji" size={32} color="#fff" />
              <Text size={32} color="#fff">
                15605666868
              </Text>
            </SlotRowView>
            <SlotRowView slot={25}>
              <Icon name="icon-wechat" size={38} color="#fff" />
              <Text size={32} color="#fff">
                qy15605666868
              </Text>
            </SlotRowView>
          </SlotColumnView>
        </Block>
        <XCenterView height={280}>
          <Text size={30} color="#50555c">
            Copyright © 2009 - 2018. All rights reserved.
          </Text>
        </XCenterView>
      </div>
    )
  }
}
