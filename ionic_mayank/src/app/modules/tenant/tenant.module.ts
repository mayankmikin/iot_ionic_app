import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TenantPage } from './tenant.page';
import { TenantViewComponent } from './tenant-view/tenant-view.component';

const routes: Routes = [
  {
    path: '',
    component: TenantViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TenantPage,TenantViewComponent]
})
export class TenantPageModule {}
