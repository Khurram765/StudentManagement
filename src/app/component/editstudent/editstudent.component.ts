import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css'],
  providers: [StudentsService]
})
export class EditstudentComponent implements OnInit{

  updatestudent:any;
  getId:any;
  show:any;
  
  constructor(private http:StudentsService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getId = this.route.snapshot.params['id'];
    this.http.GetSpecificStudent(this.getId).subscribe((res)=>{
      this.show = res;
      this.updatestudent = new FormGroup({
        sname: new FormControl(this.show.sname,[Validators.required,Validators.minLength(3)]),
        semail: new FormControl(this.show.semail,[Validators.required,Validators.email]),
        sage: new FormControl(this.show.sage,[Validators.required])
      });
      
    },
    (error)=>{
      if(error.ok==false){
        this.router.navigate(['']);
      }
    }
    )
    // console.log(this.show);
    this.updatestudent = new FormGroup({
      sname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      semail: new FormControl('',[Validators.required,Validators.email]),
      sage: new FormControl('',[Validators.required])
    })
  }


  updateData(){
    if(this.updatestudent.valid){
      this.http.UpdateStudent(this.updatestudent.value,this.getId).subscribe((res)=>{
        alert('Data updated successfully');
        this.router.navigate(['']);
      })
    }else{
      alert('Please fill out all fields or enter valid data');
    }
  }

}

