import { Component, OnInit, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [MessageService]
})
export class LogoutComponent implements OnInit{

  private dialogRef = inject(MatDialogRef);
  private router = inject(Router);
  private messageService = inject(MessageService);

    ngOnInit(): void {
      //this.confirm1();
    }

    onNoClick(){
      this.dialogRef.close(3);
    }

    salir(){
      this.messageService.add({ severity: 'success', summary: 'ok', detail: 'Sesión cerrada' });
      localStorage.removeItem('token');
      this.recargarPagina();
      this.router.navigate(['/dashboard']);
      this.dialogRef.close(1);
    }

    recargarPagina(): void {
      window.location.reload();
    }
  

}
