import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';

import { MaterialModule } from '../material/material.module';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShopPageComponent } from './containers/shop-page/shop-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { ProductPageComponent } from './containers/product-page/product-page.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '../shop/store';
import { ProductsEffects } from './store/effects/products.effect';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    StoreModule.forFeature('shop', reducers),
    EffectsModule.forFeature(effects),
    FormsModule,
    NguCarouselModule
  ],
  declarations: [
    ProductListComponent,
    GridItemComponent,
    SidebarComponent,
    ShopPageComponent,
    ListItemComponent,
    ProductPageComponent,
    RecommendationsComponent
  ],
  exports: [
    SidebarComponent,
    FormsModule,
    ShopPageComponent,
    ProductListComponent,
    ListItemComponent,
    GridItemComponent,
    ProductPageComponent
  ],
  providers: [
    ProductsEffects
  ]
})
export class ShopModule {}
