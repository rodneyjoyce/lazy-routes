import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors.component';
import { FeatureModule } from '../featuremodule/feature.module';

const routes: Routes = [
  { path: '', component: AuthorsComponent },
];

@NgModule({
  imports: [
    FeatureModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthorsComponent]
})
export class Mod2Module { }
