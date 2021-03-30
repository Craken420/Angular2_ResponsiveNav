import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

const MaterialModules = [
  MatSidenavModule, MatTabsModule, MatToolbarModule, MatIconModule, MatButtonModule,
  MatListModule, MatMenuModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [
    MaterialModules
  ]
})
export class MaterialModule { }
