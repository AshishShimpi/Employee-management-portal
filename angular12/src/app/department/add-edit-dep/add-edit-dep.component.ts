import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.scss']
})
export class AddEditDepComponent implements OnInit {
  
  constructor(private service:SharedService) { }
  
  @Input() dp:any;
  @Output() updateList: EventEmitter<any> = new EventEmitter;

  DepartmentId:number; 
  DepartmentName:string;
  
  ngOnInit(): void {
    this.DepartmentId = this.dp.departmentId;
    this.DepartmentName = this.dp.departmentName;
  }
  
  addDepartment(){
    let val = {
      departmentName : this.DepartmentName
    }
    this.service.addDepartment(val).subscribe(res => {
      this.updateList.emit();
      alert(res.toString());
    })
  }

  updateDepartment(){
    let val = {
      departmentId : this.DepartmentId,
      departmentName : this.DepartmentName
    }
    this.service.updateDepartment(val).subscribe(res => {
      this.updateList.emit();
      alert(res.toString());
    })
  }

}
