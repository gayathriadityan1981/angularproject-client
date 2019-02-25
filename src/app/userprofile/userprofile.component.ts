import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Employee } from '../Employee';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { CrudService } from 'src/app/CrudService';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers:[CrudService]
})
export class UserprofileComponent implements OnInit {
 /* @Input() data;
  employeeDtls = [];


  constructor (private service:CrudService ){}
  employee:Employee;
  model=new Employee();
  emp:Employee[];
  ngOnInit() {
    this.employeeDtls = this.data;
    console.log(this.employeeDtls);
      }
  
  viewUser(model){
    console.log("--view user--------------"+model.id);
    this.service.getEmployeeDetails(model.id).subscribe(
      data => {
          console.log("---getEmployeeDetails---data----");
           this.model=data as Employee; 
      //  this.model = data as string[];		// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log("-----getEmployeeDetails----errr-");
        console.log (err.message);
      }
    );
  }*/
 // employee = new Employee();
 model:any;
  constructor(private service: CrudService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    console.log("-------id-----------"+id);
    this.service.getEmployeeDetails(id).subscribe(
      data => {
          console.log("---getEmployeeDetails---data----");
           this.model=data ; 
     // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log("-----getEmployeeDetails----errr-");
        console.log (err.message);
      }
    );
  }
  editUser(model){
    this.service.updateEmployee(model).subscribe(
      data => {
          console.log("------update---data----");
            
      //  this.model = data as string[];		// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log("-----updateEmployee----errr-");
        console.log (err.message);
      }
    );
  }
}
