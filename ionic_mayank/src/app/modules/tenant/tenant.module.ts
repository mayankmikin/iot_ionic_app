import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TenantPage } from './tenant.page';
import { TenantViewComponent } from './tenant-view/tenant-view.component';
import { TenantAddComponent } from './tenant-add/tenant-add.component';
import { TenantRemoveComponent } from './tenant-remove/tenant-remove.component';

const routes: Routes = [
  {
    path: '',
    component: TenantViewComponent
  },
  {
    path: 'add',
    component: TenantAddComponent
  },
  {
    path: 'remove',
    component: TenantRemoveComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TenantPage,TenantViewComponent,TenantAddComponent,TenantRemoveComponent]
})
export class TenantPageModule {}
