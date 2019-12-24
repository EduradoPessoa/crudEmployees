import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { Department } from '../models/department.models';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department[] = [
    {name: 'Help Desk'},
    {name: 'Human Resource'},
    {name: 'Information Tecnology'},
    {name: 'Payroll'},
    {name: 'Account'}
  ]
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm):void {
    console.log(empForm.value);
  }
}
