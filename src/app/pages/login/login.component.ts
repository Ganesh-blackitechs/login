import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router} from '@angular/router';
import { find } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginView: boolean = false


  userLogin: any = {
    userName: '',
    password: ''
  }

  // existing user
  userName:string ="Ganesh";
  password:string ="1234";

  router = inject(Router);



  onlogin() {
    debugger;
      // const isUserFound = (this.userName == this.userLogin.userName && this.password == this.userLogin.password);

      if(this.userName == this.userLogin.userName && this.password == this.userLogin.password){
        this.router.navigateByUrl('dashboard')
      }
      else {
        alert("Username or password is wrong")
      }
    

  }
}