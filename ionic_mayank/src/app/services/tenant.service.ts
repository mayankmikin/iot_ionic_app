import { Injectable } from '@angular/core';
import { Urls } from '../model/urls';
import { HttpClient } from '@angular/common/http';
import { Tenant } from '../model/tenant';

const apiurl=Urls.apiurl;

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private baseurl=apiurl+"/tenant";
  private url_call:string
  constructor(private  httpclient:HttpClient) { }

  getAllTenants()
  {
   return  this.httpclient.get<Tenant[]>(this.baseurl);
  }

  saveTenant(tenant:Tenant)
  {
   console.log('tenant to save is ',tenant);
   return  this.httpclient.post<Tenant[]>(this.baseurl,tenant);
  }

  deleteTenant(id:string)
  {
    this.url_call=this.baseurl+'/'+id
    console.log(this.url_call)
    return  this.httpclient.delete(this.url_call);
  }
  
  deactivateTenant(id:string)
  {
    return  this.httpclient.patch(this.baseurl,id);
  }

}
