import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
    selector: 'app-show-dep',
    templateUrl: './show-dep.component.html',
    styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit {
    constructor(private service: SharedService) { }
    departmentList: any = [];
    unfilteredDepartmentList:any = [];
    ActiveAddEditDepComponent = false;
    title = "";
    dp: any;
    filterId: number;
    filterName="";

    ngOnInit(): void {
        this.deptList();
    }

    addClick() {
        this.dp = {
            departmentId: 0,
            departmentName: ""
        }
        this.title = "Add Department"
        this.ActiveAddEditDepComponent = true;
    }

    editClick(item: any) {
        this.dp = item;
        this.title = "Edit Department";
        this.ActiveAddEditDepComponent = true;
    }

    closeClick() {
        this.ActiveAddEditDepComponent = false;
        this.deptList();
    }

    deptList() {
        this.service.getDeptartmentList().subscribe(data => {
            this.departmentList = data;
            this.unfilteredDepartmentList = data;
        })
    }

    deleteDept(val: number) {
        this.service.deleteDepartment(val).subscribe(res => {
            this.deptList();
            alert(res.toString());
        })
    }

    filter(){
        let filterId = this.filterId;
        let filterName = this.filterName;
        
        this.departmentList = this.unfilteredDepartmentList.filter(function(department){
            return department.departmentId.toString().includes(filterId.toString()) 
            && department.departmentName.trim().toLowerCase().includes(filterName.trim().toLowerCase()) 
        })
    }

    sort(column, asc){
        console.log("hiii")
        this.departmentList = this.unfilteredDepartmentList.sort(function(a, b){
            if(asc)return a[column] < b[column] ? -1 : (a[column] > b[column] ? 1 : 0);
            else return a[column] > b[column] ? -1 : (a[column] < b[column] ? 1 : 0);
        })

    }
}
