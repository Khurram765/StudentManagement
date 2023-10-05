import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css'],
  providers:[StudentsService]
})
export class ViewstudentComponent implements OnInit{
  constructor (private studentData:StudentsService,private router:Router) {}

  data:any = [];
  singleData:any = "";
  ngOnInit(){
    this.studentData.GetAllStudents().subscribe((res)=>{
      this.data = res;
      console.log(this.data);
    })
  }
  
  deleteData(id:any){
    if(confirm("Do you really want to delete this data?")){
      
      this.studentData.DeleteStudent(id).subscribe((res)=>{
        alert('Data Deleted Successfully');
        this.ngOnInit();
      })
    }
  }

  storeId(id:any){
    this.studentData.GetSpecificStudent(id).subscribe((res)=>{
      this.singleData = res;
      console.log(this.singleData);
    })
  }
}
