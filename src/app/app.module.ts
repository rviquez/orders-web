import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './services/orders.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { OrderDisplayComponent } from './order-display/order-display.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderDisplayComponent,
    AddProductComponent
  ],
  imports: [BrowserModule, HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [
    OrdersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
