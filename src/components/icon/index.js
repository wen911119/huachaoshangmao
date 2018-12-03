import { h } from 'preact'
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = '//at.alicdn.com/t/font_946314_2zus68qyma2.css'
document.body.appendChild(link)

const Icon = ({ name, size, color }) => (
  <i className={`iconfont ${name}`} style={{ fontSize: `${size}px`, color }} />
)

export default Icon
