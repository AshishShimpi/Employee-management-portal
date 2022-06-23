import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
    selector: 'app-show-emp',
    templateUrl: './show-emp.component.html',
    styleUrls: ['./show-emp.component.scss']
})
export class ShowEmpComponent implements OnInit {
    constructor(private service: SharedService) { }
    employeeList: any = [];

    title = "";
    emp: any;
    ActiveAddEditEmpComponent = false;

    ngOnInit(): void {
        this.getEmpList();
    }

    getEmpList() {
        this.service.getEmployeeList().subscribe(data => {
            this.employeeList = data;
        })
    }

    addClick() {
        this.emp = {
            id: 0,
            name: "",
            department: "",
            photoFileName: "anonymous.png",
            dateOfJoining: ""
        }
        console.log(this.emp);
        this.title = "Add Employee"
        this.ActiveAddEditEmpComponent = true;
    }

    editClick(item: any) {
        this.emp = item;
        console.log(this.emp);
        this.title = "Edit Employee";
        this.ActiveAddEditEmpComponent = true;
    }

    closeClick() {
        this.ActiveAddEditEmpComponent = false;
        this.getEmpList();
    }

    deleteEmp(val: number) {
        this.service.deleteEmployee(val).subscribe(res => {
            this.getEmpList();
            alert(res.toString());
        })
    }


}


