import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Employee } from '../Employee';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { CrudService } from 'src/app/CrudService';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers:[CrudService]
})
export class UsersListComponent implements OnInit{
  title = 'client';
  constructor (private service:CrudService ){}
    employee:Employee;
    model=new Employee();
    emp:Employee[]=[];

  ngOnInit(){
    this.listEmployees();
  }
  listEmployees(){
    this.service.listEmployees().subscribe(
      data => {
      //  console.log("------data----"+data[0][0]);
            
        this.emp = data;
        console.log(data)	;	// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log("------err----");
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
editUser(id){
  this.service.updateEmployee(id).subscribe(
    data => {
        console.log("---updateEmployee---data----");
          
    //  this.model = data as string[];		// FILL THE ARRAY WITH DATA.
    },
    (err: HttpErrorResponse) => {
      console.log("-----updateEmployee----errr-");
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
