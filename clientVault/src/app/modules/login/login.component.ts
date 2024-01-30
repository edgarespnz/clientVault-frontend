import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from '../../services/http/login/login.service';
import { LoginUser } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private loginService: LoginService) {
    
  }

  hidePassword = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if(this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);
    const emailValue = this.loginForm.value.email ?? '';
    const passwordValue = this.loginForm.value.password ?? '';

    const LoginUser: LoginUser = {
      email: emailValue,
      password: passwordValue,
    }

    this.loginService.login(LoginUser).subscribe((res) => {
      console.log(res);
    });
  }
}
