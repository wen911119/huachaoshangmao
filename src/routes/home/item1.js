import { h } from 'preact'
import Image from '../../components/image'
import Text from '@ruiyun/preact-text'
import { XCenterView, SlotColumnView } from '@ruiyun/preact-layout-suite'

const Item1 = props => (
  <SlotColumnView slot={16} padding={[0, 0, 40, 0]}>
    <XCenterView>
      <Image
        style={{ borderRadius: '100%' }}
        width={380}
        height={380}
        src={props.img}
      />
    </XCenterView>
    <Text color="#e09a0c" size={40}>
      {props.title}
    </Text>
    <Text color="#50555c" size={30}>
      {props.desc}
    </Text>
  </SlotColumnView>
)

export default Item1
