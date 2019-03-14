import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonUserService } from 'src/app/services/common-user.service';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss'],
})
export class AccountViewComponent implements OnInit {

  constructor(private accountService:AccountService,
    private loadingController:LoadingController,
    public router: Router,
    private commonUserService:CommonUserService
    ) { }

  ngOnInit() 
  {
    this.getAllAccounts()
  }

  private accounts:Account[]=[];
  private Page_Name="Account Details"
  private model;
  private model_Caps;

  async getAllAccounts()
  {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    await loading.present();
    await this.accountService.getAllAccounts()
      .subscribe(res => {
        console.log('calling getAllAccountsService')
        if(res.length>0)
        {
          console.log(res);
          this.accounts= res;
          this.model=Object.keys(this.accounts[0]);
          console.log('keys are')
          console.log(this.model)
          this.model_Caps=Object.keys(this.accounts[0]).map(r=>r.toUpperCase())
          loading.dismiss();
        }
        else{
          loading.dismiss();
          //TODO:  show some error on the screen 
        }
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  editAccount(account:Account)
  {
    console.log('account to edit is ')
    console.log(account)
  }
}
