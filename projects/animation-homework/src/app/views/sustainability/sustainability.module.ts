import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityComponent } from './sustainability.component';
import { SustainabilityOptionModule } from '../../componets';
import { RouterModule, Routes } from '@angular/router';
import { SustainabilityOptionComponent } from '../../componets/sustainability-option/sustainability-option.component';

const routes : Routes= [
  {
    path: '',
    component: SustainabilityComponent
  },
]

@NgModule({
  declarations: [SustainabilityComponent],
  imports: [
    CommonModule,
    SustainabilityOptionModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class SustainabilityModule { }
