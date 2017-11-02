/** Rollup plugins */
import Min from 'rollup-plugin-babel-minify'
import TS from 'rollup-plugin-typescript2'
import CJS from 'rollup-plugin-commonjs'
import RS from 'rollup-plugin-node-resolve'

/** Utils */
import { join } from 'path'
import { tmpdir } from 'os'

export const base = {
  /** External dependecies, resolved via commonjs or AMD */
  external: [
    'inferno-component',
    'inferno',
    '@slup/common',
    '@slup/theming',
    '@slup/ripple'
  ],

  /** External dependecies, resolved via commonjs or AMD */
  globals: {
    /** Slup modules */
    '@slup/common': 'Slup.Common',
    '@slup/theming': 'Slup.Theming',
    '@slup/ripple': 'Slup.Ripple',
    '@slup/buttons': 'Slup.Buttons',
    '@slup/controls': 'Slup.Controls',
    '@slup/grid': 'Slup.Grid',
    '@slup/icons': 'Slup.Icons',
    '@slup/lists': 'Slup.Lists',
    '@slup/navbar': 'Slup.Navbar',
    '@slup/sidenav': 'Slup.Sidenav',
    '@slup/slider': 'Slup.Slider',
    '@slup/tabs': 'Slup.Tabs',
    '@slup/typography': 'Slup.Typography',

    /** Other externals */
    'inferno-component': 'Inferno.Component',
    'inferno': 'Inferno'
  },

  plugins: [
    CJS(),
    RS(),
    TS({
      cacheRoot: join(tmpdir(), '.rpt2_cache'),
      /**
       * Needed to avoid errors with TS and missing types,
       * or missing modules(for peerDependencies)
       */
      check: false
    }),
    Min({ comments: false })
  ]
}

export default (extend) => Object.assign({}, base, extend)
