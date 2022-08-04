import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';


@NgModule({
  declarations: [
    BasicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }