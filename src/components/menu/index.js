import { h, Component } from 'preact'
import {
  SlotRowView,
  RowView,
  SlotColumnView,
  XCenterView,
  ColumnView
} from '@ruiyun/preact-layout-suite'
import Text from '@ruiyun/preact-text'
import { TouchableInline } from '@ruiyun/preact-m-touchable'
import { WithModal } from '@ruiyun/preact-modal'
import Line from '@ruiyun/preact-line'

const containerWidth = document.body.clientWidth

const menuStyle = {
  position: 'fixed',
  top: '10px',
  left: '10px',
  borderRadius: '4px',
  zIndex: 101
}

const lineStyle = {
  width: '100%',
  height: '2px',
  backgroundColor: '#fff',
  transition: '.3s ease-in-out',
  borderRadius: '2px'
}

const lineStyleClose = {
  backgroundColor: '#636972',
  transformOrigin: 'left center'
}

// eslint-disable-next-line
const renderTopModalContent = (titles, activeIndex, onSelect) => () => (
  <SlotColumnView
    width="100vw"
    bgColor="#fff"
    padding={[88, 48, 0, 48]}
    slot={<Line />}
  >
    {titles.map((t, i) => (
      // eslint-disable-next-line
      <TouchableInline key={i} onPress={onSelect.bind(this, i)}>
        <RowView height={94} padding={[0, 0, 0, 48]}>
          <Text
            color="#666"
            size={32}
            style={{ fontWeight: activeIndex === i ? 700 : 300 }}
          >
            {t}
          </Text>
        </RowView>
      </TouchableInline>
    ))}
  </SlotColumnView>
)

@WithModal
export default class Menu extends Component {
  state = {
    open: false
  }
  toggelMenu = () => {
    if (this.state.open) {
      this.setState({ open: false }, this.props.$modal.hide)
    }
    else {
      this.setState(
        {
          open: true
        },
        () => {
          this.props.$modal.show({
            content: renderTopModalContent(
              this.props.titles,
              this.props.activeIndex,
              this.onSelect
            ),
            mask: 0.1,
            position: 'top',
            onMaskClick: this.toggelMenu,
            autoClose: false
          })
        }
      )
    }
  }
  onSelect = index => {
    this.toggelMenu()
    this.props.onSelect && this.props.onSelect(index)
    document
      .getElementById(this.props.titles[index])
      .scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  render ({ titles, activeIndex = 0 }, { open }) {
    if (containerWidth < 768) {
      let line1Style = lineStyle
      let line2Style = lineStyle
      let line3Style = lineStyle
      const menuStyleMerge = Object.assign({}, menuStyle, {
        boxShadow: open ? '' : '0 1px 3px 0 rgba(0,0,0,.3)'
      })
      if (open) {
        line1Style = Object.assign({}, lineStyle, lineStyleClose, {
          transform: 'rotate(45deg)'
        })
        line2Style = Object.assign({}, lineStyle, {
          width: '0%'
        })
        line3Style = Object.assign({}, lineStyle, lineStyleClose, {
          transform: 'rotate(-45deg)'
        })
      }
      return (
        <TouchableInline onPress={this.toggelMenu}>
          <XCenterView
            width={80}
            height={80}
            bgColor={open ? '#fff' : '#e09a0c'}
            style={menuStyleMerge}
          >
            <ColumnView width="22px" height="17.3px" vAlign="space-between">
              <span style={line1Style} />
              <span style={line2Style} />
              <span style={line3Style} />
            </ColumnView>
          </XCenterView>
        </TouchableInline>
      )
    }
    return (
      <RowView hAlign="center">
        <SlotRowView slot={40}>
          {titles.map((title, i) => (
            <Text
              color={activeIndex === i ? '#e09a0c' : '#678'}
              style={{ fontSize: `14px` }}
              key={i}
            >
              {title}
            </Text>
          ))}
        </SlotRowView>
      </RowView>
    )
  }
}
