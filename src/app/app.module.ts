import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { CuiComponent } from './components/cui/cui.component';
import { ConversantUIKitModule } from '@cnvr/cuik';                // Add this line
//import { ConversantUIKitChartsModule } from '@cnvr/cuik/charts';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentCuiComponent } from './components/student-cui/student-cui.component'; 
import { StudentOrderPipe } from './pipes/studentOrder.pipe';
import { StudentCuiTableComponent } from './components/student-cui-table/student-cui-table.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentClickDetailsComponent } from './components/student-click-details/student-click-details.component';
import { CuiNavComponent } from './components/cui-nav/cui-nav.component';
import { routing } from './app.routing';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    CuiComponent,
    OrderByPipe,
    StudentCuiComponent,
    StudentOrderPipe,
    StudentCuiTableComponent,
    StudentClickDetailsComponent,
    CuiNavComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   // ConversantUIKitChartsModule,
    ConversantUIKitModule,
    BrowserAnimationsModule,
    ReactiveFormsModule ,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
