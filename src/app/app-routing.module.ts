import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { Routes, Router, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { TasksComponent } from './views/tasks/tasks.component';

export const routes:Routes= [
  { path: 'login',component: LoginComponent },
  { path: 'tasks',component: TasksComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login'}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports:[RouterModule],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy  }]
  
})
export class AppRoutingModule { }
