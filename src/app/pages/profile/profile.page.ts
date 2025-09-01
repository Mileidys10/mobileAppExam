import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Iuser, UserService } from 'src/app/shared/service/user-service';
import { SharedModule } from "src/app/shared/shared-module";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  user: Iuser | null = null;
  nameController: FormControl = new FormControl('', [Validators.required])
  
  constructor(private service:UserService) { }

  ngOnInit() {
    this.loadUser();
    if (this.user) {
      this.nameController.setValue(this.user.name);
    }
  }

  loadUser(){
    this.user = this.service.getUser();
  }


}
