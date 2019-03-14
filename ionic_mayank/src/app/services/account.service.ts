import { Injectable } from '@angular/core';
import { Urls } from '../model/urls';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/account';

const accountapiurl=Urls.accountapiurl;

@Injectable({
  providedIn: 'root'
})
export class AccountService 
{
  private baseurl=accountapiurl+"/account";
  private url_call:string;

  constructor(private  httpclient:HttpClient) { }

  getAllAccounts()
  {
   return  this.httpclient.get<Account[]>(this.baseurl);
  }
}
