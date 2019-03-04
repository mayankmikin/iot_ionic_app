import { Component, OnInit } from '@angular/core';
import { CommonUserService } from 'src/app/services/common-user.service';
import { Tenant } from 'src/app/model/tenant';
import { TenantService } from 'src/app/services/tenant.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrls: ['./tenant-edit.component.scss'],
})
export class TenantEditComponent implements OnInit {
  private Page_Name="Edit Tenant"
  private tenant:Tenant
  private tenants:Tenant[]=[];
  constructor(
    private tenantService:TenantService,
    private commonUserService:CommonUserService,
    public router: Router,
    public loadingController: LoadingController

  ) { }

  ngOnInit() {
   this.tenant= JSON.parse(this.commonUserService.getSession('editTenant'));
   console.log('edit tenant details')
  // Object.assign(this.tenant,this.commonUserService.getSession('editTenant'))
   console.log(this.tenant)
  }
  natureOfIndustry=['GPS','Trading'];
  async saveTenant(){
    const loading = await this.loadingController.create({
      message: 'Saving ...',
      spinner: 'crescent',
      duration: 2000
    });
    await loading.present();
       console.log('saving the tenant')
       console.log(this.tenant)
    await this.tenantService.editTenant(this.tenant)
    .subscribe(res => {
       // let id = res['id'];
       // this.router.navigate(['/detail/'+id]);
       this.tenant=new Tenant();
       console.log('tenant response is: ')
       console.log(res)
       this.tenants= res;
       this.commonUserService.setSession('allTenants', this.tenants)
       loading.dismiss();
      
      }, (err) => {
        console.log(err);
      });
      this.router.navigate(['/tenant']);
  }
}
