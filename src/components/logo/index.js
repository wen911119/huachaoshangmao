import { h } from 'preact'
import Icon from '@ruiyun/preact-icon'
import { SlotColumnView } from '@ruiyun/preact-layout-suite'
import Text from '@ruiyun/preact-text'

const Logo = ({
  brand,
  logoSize,
  logoColor,
  logo,
  brandColor,
  brandSize,
  gap = 10
}) => (
  <SlotColumnView slot={gap} hAlign="center" padding={[30, 0, 30, 0]}>
    <Icon name={logo} size={logoSize} color={logoColor} />
    <Text color={brandColor} style={{ fontWeight: 'bold', fontSize: `${brandSize}px` }}>
      {brand}
    </Text>
  </SlotColumnView>
)

export default Logo
