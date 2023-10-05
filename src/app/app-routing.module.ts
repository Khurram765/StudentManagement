import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewstudentComponent } from './component/viewstudent/viewstudent.component';
import { AddstudentComponent } from './component/addstudent/addstudent.component';
import { EditstudentComponent } from './component/editstudent/editstudent.component';
import { DeletestudentComponent } from './component/deletestudent/deletestudent.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'',component:ViewstudentComponent},
  {path:'add',component:AddstudentComponent},
  {path:'edit/:id',component:EditstudentComponent},
  {path:'delete',component:DeletestudentComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
