import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private baseurl="http://localhost:9999/api/v1/device";

  constructor(private  httpclient:HttpClient) 
  {

  }

  getAllDevices()
  {
    console.log("getAllDevices: Device Service")
   return  this.httpclient.get<Device[]>(this.baseurl);
  }
}
