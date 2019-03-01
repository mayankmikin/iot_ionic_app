import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { TenantService } from 'src/app/services/tenant.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Tenant } from 'src/app/model/tenant';

@Component({
  
  selector: 'app-tenant-add',
  templateUrl: './tenant-add.component.html',
  styleUrls: ['./tenant-add.component.scss'],
})
export class TenantAddComponent implements OnInit {
  tenant:Tenant;
  natureOfIndustry=['GPS','Trading'];

  constructor(private formBuilder: FormBuilder,
    private tenantService:TenantService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    ) 
  {
    this.tenant= new Tenant();
   }

  ngOnInit() {
    console.log(this.natureOfIndustry)
  }
  async saveTenant(){
    const loading = await this.loadingController.create({
      message: 'Saving ...',
      spinner: 'crescent',
      duration: 2000
    });
    await loading.present();
       console.log('saving the tenant')
       console.log(this.tenant)
    await this.tenantService.saveTenant(this.tenant)
    .subscribe(res => {
       // let id = res['id'];
       // this.router.navigate(['/detail/'+id]);
       console.log('tenant response is: ')
       console.log(res)
       loading.dismiss();
       this.router.navigate(['/tenant']);
      }, (err) => {
        console.log(err);
      });
  }

 
}
