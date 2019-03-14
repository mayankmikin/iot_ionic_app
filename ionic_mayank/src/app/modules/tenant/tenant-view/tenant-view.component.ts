import { Component, OnInit, OnDestroy, AfterViewChecked, DoCheck } from '@angular/core';
import { Tenant } from 'src/app/model/tenant';
import { TenantService } from 'src/app/services/tenant.service';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonUserService } from 'src/app/services/common-user.service';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-tenant-view',
  templateUrl: './tenant-view.component.html',
  styleUrls: ['./tenant-view.component.scss'],
})
export class TenantViewComponent implements OnInit  {


  private Page_Name="Tenant Details"
  private tenants:Tenant[]=[];
  private model;
  private model_Caps;
  constructor(private tenantService:TenantService,
    private loadingController:LoadingController,
    public router: Router,
    private commonUserService:CommonUserService
    ) { }

  ngOnInit() 
  {
 
    if(this.commonUserService.getSession('allTenants'))
    {

      console.log('not  in local storage so calling the service')
      this.getAllTenants()
      this.commonUserService.setSession('allTenants', this.tenants);
    }
    else{

      console.log('found in the localstorage')
      this.tenants=this.commonUserService.getSession('allTenants')
      this.setResultsAfterSuccessfull(this.tenants)
    }
    
  }

  async getAllTenants() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    await loading.present();
    await this.tenantService.getAllTenants()
      .subscribe(res => {
        console.log('calling getAllTenantService')
        if(res.length>0)
        {
          console.log(res);
          this.setResultsAfterSuccessfull(res)
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
  public searchText : string;
  async editTenant(tenant:Tenant)
  {
    console.log('inside edit tenant')
    this.commonUserService.setSession('editTenant', tenant);
    this.router.navigate(['/tenant/edit/'+tenant.tenantId]);
  }

  setResultsAfterSuccessfull(res)
  {
    this.tenants= res;
          this.model=Object.keys(this.tenants[0]);
          console.log('keys are')
          console.log(this.model)
          this.model_Caps=Object.keys(this.tenants[0]).map(r=>r.toUpperCase())
         
  }
}
