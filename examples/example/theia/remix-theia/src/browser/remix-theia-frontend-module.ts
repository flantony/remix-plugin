import { CommandContribution, MenuContribution} from '@theia/core';
import { FrontendApplicationContribution } from "@theia/core/lib/browser";
import { ContainerModule } from "inversify";
import { RemixConsoleLogContribution,RemixConsoleLogMenuContribution } from './remix-console-log-contribution';
import { RemixEngineFrontendContribution } from './remix-engine-frontend-contribution';
import { RemixEngineService } from './remix-engine-service';

export default new ContainerModule(bind => {
    bind(RemixEngineService).to(RemixEngineService).inSingletonScope();
    bind(RemixEngineFrontendContribution).to(RemixEngineFrontendContribution);
    bind(CommandContribution).to(RemixConsoleLogContribution);
    bind(MenuContribution).to(RemixConsoleLogMenuContribution);
    bind(FrontendApplicationContribution).to(RemixEngineFrontendContribution);
});
