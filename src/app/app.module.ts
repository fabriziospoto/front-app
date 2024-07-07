import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderEditComponent } from './components/order-edit/order-edit.component';
import { OrderReadComponent } from './components/order-read/order-read.component';
import { ProductsDropdownComponent } from './components/products-dropdown/products-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    NavbarComponent,
    OrderEditComponent,
    OrderReadComponent,
    ProductsDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
