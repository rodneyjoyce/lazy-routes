import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { FeatureModule } from './featuremodule/feature.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './featuremodule/feature.component';

const routes: Routes = [
  { path: 'books', loadChildren: 'app/mod1/mod1.module#Mod1Module' },
  { path: 'authors', loadChildren: 'app/mod2/mod2.module#Mod2Module' },
  { path: 'mod3', loadChildren: 'app/anotherlevel/mod3/mod3.module#Mod3Module' },
  { path: 'beta', loadChildren: 'app/anotherlevel/beta/beta.module#BetaModule' },
  { path: 'feature', component: FeatureComponent },
];
const routerModule = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
