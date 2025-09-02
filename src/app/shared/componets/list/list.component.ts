import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideItem } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
    standalone: false

})
export class ListComponent  implements OnInit {
 @Input() items: SideItem[] = [];
  @Output() itemSelected = new EventEmitter<SideItem>();

  selectItem(item: SideItem) {
    this.itemSelected.emit(item);

  }
  constructor() { }

  ngOnInit() {}

}
