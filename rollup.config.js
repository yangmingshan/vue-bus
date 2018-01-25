import { version } from './package.json'
import buble from 'rollup-plugin-buble'

const banner = `/**
 * vue-bus v${version}
 * https://github.com/yangmingshan/vue-bus
 * @license MIT
 */`

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/vue-bus.esm.js',
    format: 'es',
    banner
  }, {
    file: 'dist/vue-bus.common.js',
    format: 'cjs',
    banner
  }, {
    file: 'dist/vue-bus.js',
    format: 'umd',
    name: 'VueBus',
    banner
  }],
  plugins: [ buble() ]
}
