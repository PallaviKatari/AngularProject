import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { AngularCourseComponent } from './angular-course/angular-course.component';
import { ReactCourseComponent } from './react-course/react-course.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'career',component:CareerComponent},
{path:'angularcourse',component:AngularCourseComponent},
{path:'reactcourse',component:ReactCourseComponent},
{path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
