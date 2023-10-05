import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url = "http://localhost:3000/students";
  constructor(private http:HttpClient) {  }

  GetAllStudents(){
    return this.http.get(this.url);
  }

  AddStudents(data:any){
    return this.http.post(this.url,data);
  }

  DeleteStudent(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  GetSpecificStudent(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  UpdateStudent(data:any,id:any){
    return this.http.put(`${this.url}/${id}`,data);
  }
}
