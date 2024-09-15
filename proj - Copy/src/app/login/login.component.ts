import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string ="samar_salah@gmail.com"
  password:string="123456"
  constructor(private router: Router){
    
  }
  
  submit(email:any,password:any){

    if (email == this.email&& password == this.password){
      this.router.navigate(['/home']);
    }else{
      alert("E-mail or Password is Wrong")
    }
    
  }
}
