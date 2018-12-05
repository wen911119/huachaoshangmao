import { h } from 'preact'
import p2r from 'p-to-r'

const Image = ({ width, height, src, style }) => (
  <img
    src={src}
    style={Object.assign(
      {
        width: typeof width === 'number' ? p2r(width) : width,
        height: typeof height === 'number' ? p2r(height) : height
      },
      style
    )}
  />
)

export default Image
