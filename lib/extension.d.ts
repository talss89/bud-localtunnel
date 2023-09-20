/// <reference types="webpack" />
import { Bud } from '@roots/bud-framework';
import { Extension } from '@roots/bud-framework/extension';
import type { WebpackPluginInstance } from '@roots/bud-framework/config';
interface Options {
}
export default class BudLocaltunnel extends Extension<Options, WebpackPluginInstance> {
    #private;
    configAfter(bud: Bud): Promise<void>;
}
export {};
