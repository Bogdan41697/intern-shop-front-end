import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShopPageComponent } from './containers/shop-page/shop-page.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductPageComponent } from './containers/product-page/product-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ShopRoutingModule,
    FormsModule
  ],
  declarations: [
    ProductListComponent,
    GridItemComponent,
    SidebarComponent,
    ShopPageComponent,
    ListItemComponent,
    ProductPageComponent
  ],
  exports: [
    SidebarComponent,
    ShopPageComponent,
    ProductListComponent,
    ListItemComponent,
    GridItemComponent,
    ProductPageComponent
  ]
})
export class ShopModule {}
