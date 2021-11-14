import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import StudentStore from 'src/app/service/store';
import { StudentinfoService } from 'src/app/service/studentinfo.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  students : Array<Student> =[];

  constructor( private stud: StudentStore, private studentService: StudentinfoService) { }

  ngOnInit():void{
    this.studentService.findAll()
    .subscribe(students=> this.students=students);
  }

  viewDetailsFor(pr:Student){
    this.stud.student=pr;
  }



}
