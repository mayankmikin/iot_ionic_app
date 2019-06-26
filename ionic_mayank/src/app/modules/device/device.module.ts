import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DevicePage } from './device.page';
import { DeviceViewComponent } from './device-view/device-view.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevicePage,DeviceViewComponent]
})
export class DevicePageModule {}
