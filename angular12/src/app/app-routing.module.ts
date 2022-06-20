import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';

const routes: Routes = [
    {
      path : 'department',
      component: DepartmentComponent,
      children:[
        {
          path : 'show',
          component: ShowDepComponent
        },
        {
          path : 'add',
          component: AddEditDepComponent
        },
      ]
    },
    {
      path : 'employee',
      component: EmployeeComponent,
      children:[
        {
          path : 'show',
          component: ShowEmpComponent
        },
        {
          path : 'add',
          component: AddEditEmpComponent
        },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
