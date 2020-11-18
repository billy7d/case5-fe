import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailedUserComponent } from './detailed-user/detailed-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'users',pathMatch:'full'},
  {path:'users',component:ListUserComponent},
  {path:'users/details/:id',component:DetailedUserComponent},
  {path:'users/create',component:CreateUserComponent},
  {path:'users/edit/:id',component:EditUserComponent},
  {path:'users/view/:id',component:DetailedUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
