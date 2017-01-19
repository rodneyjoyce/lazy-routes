import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'books', loadChildren: 'app/mod1/mod1.module#Mod1Module' },
  { path: 'authors', loadChildren: 'app/mod2/mod2.module#Mod2Module' },
  { path: 'mod3', loadChildren: 'app/anotherlevel/mod3/mod3.module#Mod3Module' },
  { path: 'beta', loadChildren: 'app/anotherlevel/beta/beta.module#BetaModule' },
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
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
