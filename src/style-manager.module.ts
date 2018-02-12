import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleManager } from './style-manager';
import { ThemeStorage } from './theme-storage';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [StyleManager, ThemeStorage]
})
export class StyleManagerModule { }
