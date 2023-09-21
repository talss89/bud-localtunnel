import { __decorate } from "tslib";
import { Bud } from '@roots/bud-framework';
import { Extension } from '@roots/bud-framework/extension';
import { bind, label } from '@roots/bud-framework/extension/decorators';
import localtunnel from 'localtunnel/localtunnel.js';
let BudLocaltunnel = class BudLocaltunnel extends Extension {
    #devTunnel;
    async configAfter(bud) {
        if (bud.isDevelopment) {
            this.#devTunnel = await localtunnel({ subdomain: bud.context.label.length > 3 ? bud.context.label : undefined, local_host: bud.server?.url.hostname, port: bud.server?.url.port });
            const tunnelUrl = new URL(this.#devTunnel.url);
            bud.setPublicUrl(tunnelUrl);
            this.#devTunnel.on('close', () => {
                throw new Error('Localtunnel has been closed. Please restart bud to reopen.');
            });
            this.#devTunnel.on('error', (err) => {
                throw new Error(err);
            });
        }
    }
};
__decorate([
    bind
], BudLocaltunnel.prototype, "configAfter", null);
BudLocaltunnel = __decorate([
    label(`bud-localtunnel`)
], BudLocaltunnel);
export default BudLocaltunnel;
