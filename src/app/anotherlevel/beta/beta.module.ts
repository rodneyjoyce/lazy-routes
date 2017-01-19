import { NgModule } from '@angular/core';
import { BetaRoutingModule } from './beta-routing.module';
import { BetaComponent } from './beta.component';

@NgModule({
    imports: [
        BetaRoutingModule
    ],
    declarations: [
        BetaComponent
    ]
})
export class BetaModule {
    constructor() {
        console.log('BetaModule loaded (Should be Lazy Loaded)');
    }
}
