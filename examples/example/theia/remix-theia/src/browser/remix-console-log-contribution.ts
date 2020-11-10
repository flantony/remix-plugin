import { CommonMenus } from '@theia/core/lib/browser';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry} from '@theia/core/lib/common';
import { inject, injectable } from 'inversify';
import { RemixEngineService } from './remix-engine-service';

const LogToConsole: Command = {
    id: 'logToRemixConsole.command',
    label: 'Say hello by remix console plugin',
};

@injectable()
export class RemixConsoleLogContribution implements CommandContribution {

    constructor(
        @inject(RemixEngineService) private readonly engine: RemixEngineService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(LogToConsole, {
            execute: () => this.engine.call('console', 'print','Hello World'),
        });
    }
}

@injectable()
export class RemixConsoleLogMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: LogToConsole.id,
            label: LogToConsole.label
        });
    }
}
