import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  public loginForm! : FormGroup;
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  //loguearse
  getLogueo(){
    let data = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    console.log(data);
    this.loginService.getLogin(data)
    .subscribe((data: any) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
      localStorage.setItem('token', data.authResponse.token);
      console.log(data.authResponse.token);
      this.recargarPagina();
      this.router.navigate(['/dashboard']);
    },(error: any) => {
      console.log(error);
      console.log(error.error.metadata[0].date);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.metadata[0].date });
    })
  }


  recargarPagina(): void {
    window.location.reload();
  }

}
