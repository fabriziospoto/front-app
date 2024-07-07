import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';
import { OrderReadComponent } from './components/order-read/order-read.component';

const routes: Routes = [
  { path: '', component:OrdersComponent },
  { path: 'edit/:id', component:OrderEditComponent },
  { path: 'read/:id', component:OrderReadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
