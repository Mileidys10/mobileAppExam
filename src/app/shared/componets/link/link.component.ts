import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideItem } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
    standalone: false

})
export class LinkComponent  implements OnInit {
@Input() item!: SideItem;
  @Output() linkClicked = new EventEmitter<SideItem>();
  constructor(private router: Router) { 
   }



onClick() {
    this.linkClicked.emit(this.item); 
    this.router.navigate(['/news-page'], { queryParams: { category: this.item.id } });
  }




  ngOnInit() {}

}
