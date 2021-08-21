import { Component, OnChanges, Input, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnChanges {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  @Output() refreshList:EventEmitter<any>=new EventEmitter();
  DepartmentList:any=[];
  DepartmentId:number=0;
  DepartmentName:string="Default";

  ngOnChanges(): void {
    if(this.dep)
    {
      this.DepartmentId=this.dep.DepartmentId;
      this.DepartmentName=this.dep.DepartmentName;
    }
  }
  addDepartment(){
    var val ={deptId:this.DepartmentId,deptName:this.DepartmentName};
    this.service.addDepartment(val).subscribe(res=>{
      //alert(res.toString());
      alert("Record Added!!");
      this.refreshList.emit("");
    },(error)=>{alert(error.message)})
    }
  
  updateDepartment()  
  {
    var val ={deptId:this.DepartmentId,deptName:this.DepartmentName};
    this.service.editDepartment(val).subscribe(res=>{
      //alert(res.toString());
      alert("Record Upated!!");
      this.refreshList.emit("");
    })
  }
}