// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { WikiComponent } from './wiki.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [
    TypographyComponent
  ]
})
export class ThemeModule { }
