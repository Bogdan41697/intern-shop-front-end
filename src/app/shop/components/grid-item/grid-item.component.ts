import { Component } from '@angular/core';

import BasicItem from '../basic-item/basic-item';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent extends BasicItem {}
