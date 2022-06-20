import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit {
  constructor(private service:SharedService) { }
  departmentList:any = [];
  
  ActiveAddEditDepComponent=false;
  title= "";
  dp:any;
  ngOnInit(): void {
    this.deptList();
  }

  addClick(){
    this.dp={
      departmentId: 0,
      departmentName: ""
    }
    this.title = "Add Department"
    this.ActiveAddEditDepComponent = true;
  }

  editClick(item:any){
    this.dp = item;
    this.title = "Edit Department";
    this.ActiveAddEditDepComponent = true;
  }

  closeClick(){
    this.ActiveAddEditDepComponent = false;
    this.deptList();
  }

  deptList(){
    this.service.getDeptartmentList().subscribe(data => {
      this.departmentList = data;
    })
  }

  deleteDept(val:number){
    this.service.deleteDepartment(val).subscribe(res => {
      this.deptList();
      alert(res.toString());
    })
  }
}
