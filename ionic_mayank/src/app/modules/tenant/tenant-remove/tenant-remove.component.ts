import { Component, OnInit } from '@angular/core';
import { Tenant } from 'src/app/model/tenant';
import { LoadingController, AngularDelegate, ActionSheetController } from '@ionic/angular';
import { TenantService } from 'src/app/services/tenant.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-tenant-remove',
  templateUrl: './tenant-remove.component.html',
  styleUrls: ['./tenant-remove.component.scss'],
})
export class TenantRemoveComponent implements OnInit {

  private tenants:Tenant[]=[]; // this is used to save all the tenant list retrieved form the backend
  private tenants_withAttributes=[]; // there is one extra attribute 'checked' to check if selected or not
  private model; // this field is used to show only small keys in the table
  private model_Caps;// this field is used to show headers in the Table
  private enable_checkboxes=false;// this field is used to show hide check boxes
  private selected_tenants=[]; // this field is used to store all the selected tenants object 
  private selectAllModel=false; // this field is used to check uncheck  header checkbox 
  constructor(private tenantService:TenantService,
    private loadingController:LoadingController,
    public actionSheetController: ActionSheetController
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
        //console.log(res);
        this.tenants= res;
        this.model=Object.keys(this.tenants[0]);
        this.model_Caps=Object.keys(this.tenants[0]).map(r=>r.toUpperCase())
        this.tenants_withAttributes=Object.assign([], this.tenants)
        this.tenants_withAttributes.forEach(
          e=>e.checked=false
        )
        console.log('tenants_withAttributes');
        console.log(this.tenants_withAttributes);
        console.log('keys are')
        console.log(this.model)
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
  public searchText : string;
  selectTenant(tenant:Tenant)
  {
    console.log('selected tenant is:')
    console.log(tenant)
    if(this.selected_tenants.includes(tenant))
    {
     
      const index: number = this.selected_tenants.indexOf(tenant);
      if (index !== -1) {
          this.selected_tenants.splice(index, 1);
      }
    }
    else{
      this.selected_tenants.push(tenant)
    }
   
    console.log('selected tenant array is: ')
    console.log(this.selected_tenants)
    this.presentActionSheet()
  }

  selectAllTenant()
  {
    console.log('inside selectAllTenant ')
    // this.tenants_withAttributes.forEach(
    //   e=> {e.checked=true
    
    //   })
    if(this.selected_tenants.length!=this.tenants_withAttributes.length)
    {
      for(let i =0; i <this.tenants_withAttributes.length; i++) {
        this.tenants_withAttributes[i].checked = !this.tenants_withAttributes[i].checked;
        this.selected_tenants.push( this.tenants_withAttributes[i])
      }
    }
    else
    {
      for(let i =0; i <this.tenants_withAttributes.length; i++) {
        this.tenants_withAttributes[i].checked = !this.tenants_withAttributes[i].checked;
      }
      this.selected_tenants=[];
    }
      
      console.log('selected tenant array is: ')
      console.log(this.selected_tenants)
      this.presentActionSheet()
     
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }
      // , {
      //   text: 'Share',
      //   icon: 'share',
      //   handler: () => {
      //     console.log('Share clicked');
      //   }
      // }, {
      //   text: 'Play (open modal)',
      //   icon: 'arrow-dropright-circle',
      //   handler: () => {
      //     console.log('Play clicked');
      //   }
      // }, {
      //   text: 'Favorite',
      //   icon: 'heart',
      //   handler: () => {
      //     console.log('Favorite clicked');
      //   }
      // }
      , {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.toggleCheckBoxes()
          this.selectAllModel=!this.selectAllModel
        }
      }]
    });
    await actionSheet.present();
  }

  toggleCheckBoxes()
  {
    for(let i =0; i <this.tenants_withAttributes.length; i++) {
      this.tenants_withAttributes[i].checked = !this.tenants_withAttributes[i].checked;
    }
    
  }

}
