import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit{

  addstudent:any;
  datasend:any;
  ngOnInit(){
    this.addstudent = new FormGroup({
      sname : new FormControl('',[Validators.required,Validators.minLength(3)]),
      semail : new FormControl('',[Validators.required,Validators.email]),
      sage : new FormControl('',[Validators.required])
    })
    // console.log(this.addstudent.controls.sname.status);
    // console.log(this.addstudent.controls.semail.dirty);
    // console.log(this.addstudent);
  }

  constructor(private http:StudentsService, private router:Router){}



  sendData(){
    if(this.addstudent.valid){
      this.http.AddStudents(this.addstudent.value).subscribe((res)=>{
      
        alert('Data Added Successfully');
        this.addstudent.reset();
        this.router.navigate(['']);
      })
    }else{
      alert('Please fill out all fields');
    }
  }


}
