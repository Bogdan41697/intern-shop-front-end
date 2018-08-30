import { Component } from '@angular/core';

import BasicItem from '../basic-item/basic-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent extends BasicItem {}
