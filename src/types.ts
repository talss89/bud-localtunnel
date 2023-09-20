import type BudLocaltunnel from './extension.js'

declare module '@roots/bud-framework' {
  interface Modules {
    'bud-localtunnel': BudLocaltunnel
  }
}
