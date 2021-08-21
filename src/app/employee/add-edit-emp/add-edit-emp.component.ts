import { Component, OnChanges,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnChanges {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  id:number=0;
  Name:string="";
  DepartmentName:string="";

  ngOnChanges(): void {
    this.id=this.emp.id;
    this.Name=this.emp.Name;
    this.DepartmentName=this.emp.DepartmentName;
  }
  addEmployee(){
    var val ={id:this.id,name:this.Name,dept:this.DepartmentName};
    this.service.addEmployee(val).subscribe(res=>{
      //alert(res.toString());
      alert("Record Added!!");
    },(error)=>{alert(error.message)})
    }
  
  updateEmployee()  
  {
    var val ={id:this.id,name:this.Name,dept:this.DepartmentName};
    this.service.editEmployee(val).subscribe(res=>{
      //alert(res.toString());
      alert("Record Updated!!");
    })
  }

}
