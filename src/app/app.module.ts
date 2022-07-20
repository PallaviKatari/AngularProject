import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ngModel-FormsModule
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { CoursesComponent } from './courses/courses.component';
//Angular provides a client HTTP API
import { HttpClientModule } from '@angular/common/http';
import { AngularCourseComponent } from './angular-course/angular-course.component';
import { ReactCourseComponent } from './react-course/react-course.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    CareerComponent,
    CoursesComponent,
    AngularCourseComponent,
    ReactCourseComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
