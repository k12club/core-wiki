import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypographyComponent } from './typography.component';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: 'wiki',
        component: WikiComponent,
        data: {
          title: 'Wiki'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
