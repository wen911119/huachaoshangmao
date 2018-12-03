import { h } from 'preact'
import style from './style'
import Icon from '../../components/icon'
import { XCenterView } from '@ruiyun/preact-layout-suite'
import Logo from '../../components/logo'
import Menu from '../../components/menu'

const Home = () => (
  <div class={style.home}>
    <Logo
      logo="icon-hc"
      logoColor="#e09a0c"
      logoSize={60}
      brand="华超商贸"
      brandSize={13}
      brandColor="#000"
    />
    <Menu titles={['经营理念', '业务范围', '主营产品', '客户案例', '联系方式']} />
    <XCenterView height={300}>
      <Icon name="icon-dingweiweizhi" size={30} color="#f8584f" />
    </XCenterView>
  </div>
)

export default Home
