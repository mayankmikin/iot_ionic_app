import { Component, OnInit } from '@angular/core';
import { Tenant } from 'src/app/model/tenant';
import { TenantService } from 'src/app/services/tenant.service';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tenant-view',
  templateUrl: './tenant-view.component.html',
  styleUrls: ['./tenant-view.component.scss'],
})
export class TenantViewComponent implements OnInit {

  private tenants:Tenant[]=[];
  private model;
  private model_Caps;
  constructor(private tenantService:TenantService,
    private loadingController:LoadingController
    ) { }

  ngOnInit() 
  {
    this.getAllTenants()
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
        console.log(res);
        this.tenants= res;
        this.model=Object.keys(this.tenants[0]);
        console.log('keys are')
        console.log(this.model)
        this.model_Caps=Object.keys(this.tenants[0]).map(r=>r.toUpperCase())
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  // getAllTenants():Observable<Tenant[]>
  // {
  //  return this.tenantService.getAllTenants();
  // }
}
