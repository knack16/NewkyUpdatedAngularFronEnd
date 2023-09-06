import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AddUserComponent } from './components/add-user/add-user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-table',component : UserTableComponent},
  { path: 'add-user',component : AddUserComponent},
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
