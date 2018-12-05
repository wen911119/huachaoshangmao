import { h } from 'preact'
import Image from '../../components/image'
import Text from '@ruiyun/preact-text'
import { SlotColumnView } from '@ruiyun/preact-layout-suite'

const Item2 = props => (
  <SlotColumnView slot={16} hAlign="center" width={320} padding={[0, 0, 40, 0]}>
    <Image
      width={320}
      height={240}
      src={props.img}
    />
    <Text color="#e09a0c" size={36}>
      {props.title}
    </Text>
    <Text color="#ccc" size={30}>
      {props.desc}
    </Text>
  </SlotColumnView>
)

export default Item2
