import {Bud} from '@roots/bud-framework'

import {Extension} from '@roots/bud-framework/extension'
import type {WebpackPluginInstance} from '@roots/bud-framework/config'

import {bind, label, expose} from '@roots/bud-framework/extension/decorators'

import localtunnel from 'localtunnel/localtunnel.js'

interface Options {}

@label(`bud-localtunnel`)
@expose(`localtunnel`)
export default class BudLocaltunnel extends Extension<
  Options,
  WebpackPluginInstance
> { 

  #devTunnel: any;

  @bind
  public override async configAfter(bud: Bud) {
    if(bud.isDevelopment && this.enabled) {
      this.#devTunnel = await localtunnel({ subdomain: bud.context.label.length > 3 ? bud.context.label : undefined, local_host: bud.server?.url.hostname, port: bud.server?.url.port })
      
      const tunnelUrl = new URL(this.#devTunnel.url);
      
      bud.setPublicUrl(tunnelUrl)

      this.#devTunnel.on('close', () => {
        throw new Error('Localtunnel has been closed. Please restart bud to reopen.');
      })

      this.#devTunnel.on('error', (err) => {
        throw new Error(err);
      })
    }
  }

}
