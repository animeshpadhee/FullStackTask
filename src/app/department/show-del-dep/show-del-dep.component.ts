import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-show-del-dep',
  templateUrl: './show-del-dep.component.html',
  styleUrls: ['./show-del-dep.component.css']
})
export class ShowDelDepComponent implements OnInit {
  //@ViewChild('#exampleModal') public modal:ModalDirective;
  constructor(private service:SharedService) { }

  DepartmentList:any=[];
  ModalTitle:string="Add Department";
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshDeptList();
  }
  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department"
    this.ActivateAddEditDepComp=false;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDeptList();
  }
  editClick(item: any){
    //this.dep=item;
    this.dep={
      DepartmentId: item.deptId,
      DepartmentName: item.deptName
    }
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDepComp=false;
  }
  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteDepartment(item.deptId).subscribe(data=>{
        //alert(data.toString());
        alert("Record Deleted!!");
        this.refreshDeptList();
      })
    }
  }
  
  refreshDeptList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
    },(error)=>{
      alert(error.message)
    });
  }
}
