import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import 'hammerjs';
import { NguCarousel } from '@ngu/carousel';

import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  @Input() products$: Observable<Product[]>;
  public carouselOne: NguCarousel;

  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 3, lg: 3, all: 0},
      slide: 1,
      speed: 400,
      interval: 3000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

}
