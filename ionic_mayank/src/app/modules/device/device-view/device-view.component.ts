import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/model/device';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss'],
})
export class DeviceViewComponent implements OnInit {

  constructor(private deviceService: DeviceService)
  {

  }

  public devices: Device[]=[];
  public Page_Name= "Devices Are:";
  public model;
  public model_Caps;

  ngOnInit() {
    console.log("inside ngonInit");
    this.deviceService.getAllDevices()
    .subscribe(
      res => {

        if (res) {
          console.log('response is: ');
          console.log(res);
         this.setResultsAfterSuccessfull(res);
        } else {
          console.log('devices are undefined');
        }
      }, err => {
        console.log(err);
      });

  }

  setResultsAfterSuccessfull(res)
  {
    this.devices= res;
          this.model=Object.keys(this.devices[0]);
          console.log('keys are')
          console.log(this.model)
          this.model_Caps=Object.keys(this.devices[0]).map(r=>r.toUpperCase())
          console.log(this.model_Caps);
         
  }

}
