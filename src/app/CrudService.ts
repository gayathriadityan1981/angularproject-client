import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class CrudService {

  constructor(public http:HttpClient) { }
  createNewRecord(record){
    return this.http.post('http://localhost:8090/saveUser',record).pipe(map(res => res));
  }
  getEmployeeDetails(id: number) : Observable<any> {
    
  //  return this.http.post('http://localhost:8090/users/getUser/',id).pipe(map(res => res));
    return this.http.get<any>(`http://localhost:8090/users/getUser/${id}`);
  }
  

  deleteEmployee(id){
      return this.http.delete('http://localhost:8090/deleteUser/',id);
  }
  updateEmployee(model:any){
   
      return this.http.post('http://localhost:8090/users/saveUser/',model).pipe(map(res=>res));
  }
  listEmployees(): Observable<any> {
   return this.http.get<any>('http://localhost:8090/users/getAllUsers');
   //return this.http.get('	http://dummy.restapiexample.com/api/v1/employees');
  }
}