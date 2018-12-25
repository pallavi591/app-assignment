import { ClientdetailComponent } from './clientdetail/clientdetail.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  {
    path: 'editDetail',
    component: ClientdetailComponent
  },
  {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: ClientComponent
  }
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
