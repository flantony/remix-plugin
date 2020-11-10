import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { injectable, inject } from 'inversify';
import {} from '@remixproject/plugin-utils';
import { RemixEngineService } from './remix-engine-service';

@injectable()
export class RemixEngineFrontendContribution implements FrontendApplicationContribution {

    constructor(@inject(RemixEngineService) private engineService:RemixEngineService) {
    }

    onStart() {
        return this.engineService.startEngine();
    }
}
