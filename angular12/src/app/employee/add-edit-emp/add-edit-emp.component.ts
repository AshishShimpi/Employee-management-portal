import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
    selector: 'app-add-edit-emp',
    templateUrl: './add-edit-emp.component.html',
    styleUrls: ['./add-edit-emp.component.scss']
})
export class AddEditEmpComponent implements OnInit {

    constructor(private service: SharedService) { }
    @Input() emp: any;
    @Output() updateList: EventEmitter<any> = new EventEmitter;

    enableButtons = true;
    uploadFail;
    uploadSuccess;
    spinner;
    id: number;
    name: string;
    department: string;
    dateOfJoining: string;
    photoFileName: string;
    
    photoFileURL:string;

    departmentList:any=[];
    
    ngOnInit(): void {
        console.log("edit initialized");
        this.setupData();
    }

    setupData(){
        this.service.getDeptartmentList().subscribe(data => {
            this.departmentList = data;
        })

        this.id = this.emp.id;
        this.name = this.emp.name;
        this.department = this.emp.department;
        this.dateOfJoining = this.emp.dateOfJoining;
        this.photoFileName = this.emp.photoFileName;
        this.photoFileURL = this.service.PhotoUrl + this.photoFileName;
    }

    addEmployee() {
        let val = {
            name: this.name,
            department: this.department,
            photoFileName: this.photoFileName,
            dateOfJoining: this.dateOfJoining
        }

        this.service.addEmployee(val).subscribe(res => {
            this.updateList.emit();
            alert(res.toString());
        })
    }

    updateEmployee() {
        let val = {
            id: this.id,
            name: this.name,
            department: this.department,
            photoFileName: this.photoFileName,
            dateOfJoining: this.dateOfJoining
        }
        
        this.service.updateEmployee(val).subscribe(res => {
            this.updateList.emit();
            alert(res.toString());
        })
    }

    uploadPhoto(event){     
        this.enableButtons = false;
        this.spinner = true;
        this.uploadSuccess = false;
        this.uploadFail = false;
        const formData : FormData = new FormData();
        var file:File = event.target.files[0];
        formData.append('uploadedFile', file, file.name);
        
        this.service.uploadFile(formData).subscribe(data => {
            
            this.enableButtons = true;
            this.uploadSuccess = true;
            this.spinner = false;
            this.photoFileName = data.toString();
            this.photoFileURL = this.service.PhotoUrl + this.photoFileName;
        },
        error => {
            this.enableButtons = true;
            this.spinner = false;
            this.uploadFail = true;
            console.log("error in uploading photo \n", error);
        })
    
    }
    

}
