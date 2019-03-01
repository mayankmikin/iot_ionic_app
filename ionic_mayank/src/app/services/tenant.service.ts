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

}
