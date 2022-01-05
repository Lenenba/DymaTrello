import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';


const LAYOUT_MODULES = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule
]

@NgModule({
  imports: LAYOUT_MODULES,
  exports:LAYOUT_MODULES
})

export class LayoutModule { }
