import { injectable } from 'inversify';
import {Engine, PluginManager, Plugin } from '@remixproject/engine';
import {} from '@remixproject/plugin-utils';
import {ConsolePlugin} from './console-plugin';

@injectable()
export class RemixEngineService {

    private engine: Engine;
    private manager: PluginManager;

    constructor(){
    }

    async startEngine(){
        this.engine = new Engine();
        this.manager = new PluginManager;
    
        const consolePlugin = new ConsolePlugin;
        const emptyPlugin = new Plugin({ name: 'empty' })
    
        this.engine.register([this.manager, consolePlugin, emptyPlugin])
        
        this.manager.activatePlugin([consolePlugin.name, emptyPlugin.name]);
    }
    
    call(plugin:string,method:string, ...payload: any[]) {
        this.manager.call(plugin, method, payload);
    }
}
