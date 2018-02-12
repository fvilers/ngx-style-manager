import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleManager } from './style-manager';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [StyleManager]
})
export class StyleManagerModule { }
