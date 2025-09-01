import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/interfaces/country';
import { Api } from 'src/app/shared/provide/api';
import { StorageProvider } from 'src/app/shared/provide/storage-provider';
import { Iuser, UserService } from 'src/app/shared/service/user-service';
import { v4 as uuidv4 } from 'uuid';



interface Idata {

}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})






export class RegisterPage implements OnInit {

  nameController: FormControl = new FormControl('', [Validators.required])
  lastNameController: FormControl = new FormControl('', [Validators.required])
  emailController: FormControl = new FormControl('', [Validators.required, Validators.email])
  passwordController: FormControl = new FormControl('', [Validators.required])
  countryController: FormControl = new FormControl('', [Validators.required])
data: Country[] = [];
  constructor(private userService: UserService, private router: Router, private http:Api) { }




  ngOnInit() {
  this.loadCountries();  }

  onSubmit() {
    
// Verifica si los campos están vacíos
  /*if (!this.passwordController.valid || !this.emailController.valid || !this.nameController.valid || !this.lastNameController.valid || !this.countryController.valid) {
    console.log('fill all the fields');
    return;
  }*/

  // Verifica el formato del email
  if (!this.emailController.valid) {
    console.log('Invalid email format');
    return;
  }

const user:Iuser = {
     id: uuidv4(),
      name: this.nameController.value,
      lastName: this.lastNameController.value,
      country: this.countryController.value,
      email: this.emailController.value,
      password: this.passwordController.value
    }


    this.userService.createUser(user);

  }


 async loadCountries() {
  const response = await this.http.get<any>('https://countriesnow.space/api/v0.1/countries/flag/unicode');
  this.data = response.data?.map((c: any) => ({
    name: c.name,
    unicodeFlag: c.unicodeFlag
  })) || [];
}

  goToLogin() {
    this.router.navigate(['/login']);
  }




}
