import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './componets/input/input.component';
import { ButtonComponent } from './componets/button/button.component';
import { HeaderComponent } from './componets/header/header.component';
import { LinkComponent } from './componets/link/link.component';
import { ListComponent } from './componets/list/list.component';
import { ModalComponent } from './componets/modal/modal.component';
import { PrincipalnewsComponent } from './componets/principalnews/principalnews.component';
import { SelectComponent } from './componets/select/select.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { UserformComponent } from './componets/userform/userform.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageProvider } from './provide/storage-provider';
import { NewsListComponentComponent } from './componets/news-list-component/news-list-component.component';
import { NewsCardComponent } from './componets/news-card-component/news-card-component.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    NewsListComponentComponent,
    NewsCardComponent,
    HeaderComponent,
    LinkComponent,
    ListComponent,
    ModalComponent,
    PrincipalnewsComponent,
    SelectComponent,
    SidebarComponent,
    UserformComponent,
    NewsCardComponent

  ],
providers:[StorageProvider],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,

  ],

  exports:[NewsCardComponent,NewsListComponentComponent,  InputComponent,ButtonComponent,HeaderComponent,LinkComponent,ListComponent,ModalComponent,PrincipalnewsComponent,SelectComponent,SidebarComponent,UserformComponent]

})
export class SharedModule { }
