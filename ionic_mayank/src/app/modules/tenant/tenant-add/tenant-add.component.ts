import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-tenant-add',
  templateUrl: './tenant-add.component.html',
  styleUrls: ['./tenant-add.component.scss'],
})
export class TenantAddComponent implements OnInit {
  classroomForm: FormGroup;
  students: FormArray;
  
  natureOfIndustry=['GPS','Trading'];

  constructor() { }

  ngOnInit() {}

}
