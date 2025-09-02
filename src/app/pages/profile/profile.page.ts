import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/interfaces/country';
import { Api } from 'src/app/shared/provide/api';
import { Iuser, UserService } from 'src/app/shared/service/user-service';
import { SharedModule } from "src/app/shared/shared-module";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  user: Iuser | null = null;
  nameController: FormControl = new FormControl('', [Validators.required])
  lastNameController: FormControl = new FormControl('', [Validators.required])
  emailController: FormControl = new FormControl('', [Validators.required, Validators.email])
  passwordController: FormControl = new FormControl('', [Validators.required])
  newPasswordController: FormControl = new FormControl('', [Validators.required])
  countryController: FormControl = new FormControl('', [Validators.required])
  data: Country[] = [];
  
  constructor(private userService:UserService, private http: Api, private router:Router) { }

 ngOnInit() {
  this.initProfile();
}

onSubmit() {
     if (!this.passwordController.valid || !this.newPasswordController.valid) {
    console.log('you must fill the password fields');
    return;
  }

  if (!this.emailController.valid) {
    console.log('Invalid email format');
    return;
  }


//usuario guardado
  const savedUser = this.userService.getUser();

    if (!savedUser) {
    console.log('No user found in session');
    return;
  }

//guardo datos ingresados del formulario
 
  const oldPassword = this.passwordController.value;
  const newPassword = this.newPasswordController.value;

  const savedPassword = this.userService.getDecryptedPassword(savedUser);



if (oldPassword !== savedPassword) {
    console.log('Old password is incorrect');
    return;
  }

  if (oldPassword === newPassword) {
    console.log('New password must be different from the old password');
    return;
  }




const user:Iuser = {
  id: savedUser.id, 
    name: this.nameController.value,
    lastName: this.lastNameController.value,
    country: this.countryController.value,
    email: this.emailController.value,
    password: newPassword
    }


    this.userService.updateUser(user);
  console.log('Password updated successfully');

  }


async initProfile() {
  this.loadUser();
  await this.loadCountries();
  if (this.user) {
    this.nameController.setValue(this.user.name);
    this.lastNameController.setValue(this.user.lastName);
    this.emailController.setValue(this.user.email);
    
    this.countryController.setValue(this.user.country);
  }
}

  loadUser(){
    this.user = this.userService.getUser();
  }
async loadCountries() {
  const response = await this.http.get<any>('https://countriesnow.space/api/v0.1/countries/flag/unicode');
  // Mapeo solo los paises con nombre y bandera
  this.data = response.data?.map((c: any) => ({
    name: c.name,
    unicodeFlag: c.unicodeFlag
  })) || [];
}

goToHome() {
this.router.navigate(['/login']);
}

}