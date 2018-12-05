import { h } from 'preact'
import { RowView, ColumnView } from '@ruiyun/preact-layout-suite'
import Text from '@ruiyun/preact-text'
import Line from '@ruiyun/preact-line'
const style1 = {
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}
const Block = ({ title, bgColor, bgImage, titleColor, children }) => (
  <ColumnView
    padding={[40, 0, 60, 0]}
    style={Object.assign(style1, {
      backgroundImage: `url("${bgImage}")`,
      backgroundColor: bgColor || 'transparent'
    })}
  >
    <RowView height={136} hAlign="center">
      <Text size={48} color={titleColor}>
        {title}
      </Text>
    </RowView>
    <Line indent={[300, 300]} scale={2} color={titleColor} />
    <RowView height={50} />
    {children}
  </ColumnView>
)

export default Block
