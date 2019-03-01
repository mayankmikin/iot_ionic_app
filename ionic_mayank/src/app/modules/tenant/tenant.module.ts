import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TenantPage } from './tenant.page';
import { TenantViewComponent } from './tenant-view/tenant-view.component';
import { TenantAddComponent } from './tenant-add/tenant-add.component';
import { TenantRemoveComponent } from './tenant-remove/tenant-remove.component';
import { GrdFilterPipe } from 'src/app/model/grid-filter-pipe';

const routes: Routes = [
  {
    path: '',
    component: TenantViewComponent
  },
  // {
  //   path: 'view',
  //   component: TenantViewComponent
  // },
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
    ReactiveFormsModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [TenantPage,TenantViewComponent,TenantAddComponent,TenantRemoveComponent,GrdFilterPipe]
})
export class TenantPageModule {}
