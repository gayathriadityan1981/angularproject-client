import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Employee } from './Employee';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { CrudService } from 'src/app/CrudService';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CrudService]
})
export class AppComponent implements OnInit{
  title = 'client';
  constructor (private service:CrudService ){}
    employee:Employee;
    model=new Employee();
    emp:Employee[];

  ngOnInit(){
    this.listEmployees();
  }
  listEmployees(){
    this.service.listEmployees().subscribe(
      data => {

            
        this.emp = data as Employee[];		// FILL THE ARRAY WITH DATA.
        console.log("------data----"+this.emp[0][0]);
        
      },
      (err: HttpErrorResponse) => {
        console.log("----------");
        console.log (err.message);
      }
    );
}
createUser(employee){
  console.log("---createNewRecord---1----"+employee.name);
  this.service.createNewRecord(employee).subscribe(
    data => {
        console.log("---createNewRecord---data----");
          
     // this.emp = data;		// FILL THE ARRAY WITH DATA.
    },
    (err: HttpErrorResponse) => {
      console.log("----create err------");
      console.log (err.message);
    }
  );
}

deleteUser(id){
  this.service.deleteEmployee(id).subscribe(
    data => {
        console.log("---deleteEmployee---data----");
          
     // this.emp = data;		// FILL THE ARRAY WITH DATA.
    },
    (err: HttpErrorResponse) => {
      console.log("-----deleteEmployee----errr-");
      console.log (err.message);
    }
  );
}

}
