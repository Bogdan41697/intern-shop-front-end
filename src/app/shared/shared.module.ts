import * as fromServices from './services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    fromServices.ProductsService,
    fromServices.CategoriesService
  ]
})
export class SharedModule { }
