import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-del-emp',
  templateUrl: './show-del-emp.component.html',
  styleUrls: ['./show-del-emp.component.css']
})
export class ShowDelEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];
  ModalTitle:string="Add Employee";
  ActivateAddEditDepComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      id:0,
      Name:"",
      DepartmentName:""
    }
    this.ModalTitle="Add Employee"
    this.ActivateAddEditDepComp=false;
  }
  closeClick(){
    this.ActivateAddEditDepComp=true;
    this.refreshEmpList();
  }
  editClick(item: any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditDepComp=false;
  }
  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteEmployee(item.id).subscribe(data=>{
        //alert(data.toString());
        alert("Record Deleted!!");
        this.refreshEmpList();
      })
    }
    //this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    },(error)=>{
      alert(error.message)
    });
  }
}
