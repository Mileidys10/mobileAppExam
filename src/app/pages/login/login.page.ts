import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from 'src/app/shared/provide/api';
import { UserService } from 'src/app/shared/service/user-service';








@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  emailController:FormControl = new FormControl('',[Validators.required,Validators.email])
  passwordController:FormControl= new FormControl('',[Validators.required])

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  
      




  }

 onSubmit(){
const email = this.emailController.value;
    const password = this.passwordController.value;

    if (this.userService.verifyUser(email, password)) {
      console.log('Login successful');
      
       this.router.navigate(['/home']);
    } else {
      console.log('Invalid credentials');
    
    }


 }

 
 goToRegister(){
this.router.navigate(['/register']);
 }




}




