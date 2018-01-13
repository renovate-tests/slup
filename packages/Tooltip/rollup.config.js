/** Impprt the base configuration */
import extend, { base } from '../../rollup.base'
import Babel from 'rollup-plugin-babel'

/** Utils */
import { join } from 'path'

export default extend({
  /** Import path */
  input: join(__dirname, 'src', 'index.tsx'),

  output: {
    /** Export path */
    file: join(__dirname, 'dist.js'),

    /** Output options */
    format: 'umd',

    /** Name for the umd export */
    name: 'Slup.Tooltip'
  },

  plugins: [
    ...base.plugins,
    Babel()
  ]
})