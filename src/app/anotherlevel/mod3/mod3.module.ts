import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Mod3Component } from './mod3.component';
import { FeatureModule } from '../../featuremodule/feature.module';

const routes: Routes = [
  { path: '', component: Mod3Component },
];

@NgModule({
  imports: [
    FeatureModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Mod3Component],
  exports: [
    Mod3Component
  ]
})
export class Mod3Module { }
