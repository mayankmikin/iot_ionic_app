import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';
import { AccountViewComponent } from './account-view/account-view.component';

const routes: Routes = [
  {
    path: '',
    component: AccountViewComponent
  },
 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)

  ],
  declarations: [AccountPage,AccountViewComponent]
})
export class AccountPageModule {}
