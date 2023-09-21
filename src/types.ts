import type BudLocaltunnel from './extension.js'

declare module '@roots/bud-framework' {
  interface Modules {
    'bud-localtunnel': BudLocaltunnel
  }

  interface Bud {
    localtunnel: BudLocaltunnel
  }
}
