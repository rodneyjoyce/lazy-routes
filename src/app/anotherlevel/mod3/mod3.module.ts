import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Mod3Component } from './mod3.component';


const routes: Routes = [
  { path: '', component: Mod3Component },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Mod3Component],
  exports: [
    Mod3Component
  ]
})
export class Mod3Module { }
