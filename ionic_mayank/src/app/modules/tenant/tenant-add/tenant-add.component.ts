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
  classroomForm: FormGroup;
  students: FormArray;
  tenant:Tenant;
  natureOfIndustry=['GPS','Trading'];

  constructor(private formBuilder: FormBuilder,
    private tenantService:TenantService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    ) 
  {
    this.classroomForm = this.formBuilder.group({
      'tenantName' : [null, Validators.required],
      'tenantDomainName' : [null, Validators.required],
      'tenantCode' : [null, Validators.required],
      'natIndustry': [null]
    });
   }

  ngOnInit() {
    console.log(this.natureOfIndustry)
  }

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };

  
  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  async saveTenant(){
       console.log(this.classroomForm.value)
       console.log('saving the tenant')
       console.log(this.tenant)
    await this.tenantService.saveTenant(this.classroomForm.value)
    .subscribe(res => {
       // let id = res['id'];
       // this.router.navigate(['/detail/'+id]);
       console.log('saving the tenant')
       console.log(res)
      }, (err) => {
        console.log(err);
      });
  }

 
}
