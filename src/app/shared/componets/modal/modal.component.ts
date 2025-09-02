import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsInterface } from 'src/app/interfaces/news-interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
    standalone: false

})
export class ModalComponent  implements OnInit {
  @Input() news!: NewsInterface;

  constructor(private modalCtrl: ModalController) { }



  ngOnInit() {}

close() {
    this.modalCtrl.dismiss();
  }

  openExternal() {
    window.open(this.news.url, '_blank');
  }
}



