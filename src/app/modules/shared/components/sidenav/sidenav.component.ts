import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, inject } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [MessageService]
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  public dialog = inject(MatDialog);
  private messageService = inject(MessageService);
  private loginService  = inject(LoginService);
  logueado: String = '';

  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Categorías", route: "category", icon: "category"},
    {name: "Productos", route: "product", icon: "production_quantity_limits"},
    {name: "Reports", route: "reports", icon: "reports"}
  ]

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
    this.logueado = this.loginService.userToken;
  }

  openCategoryDialoge() {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
        this.messageService.add({ severity: 'success', summary: 'ok', detail: 'Sesión cerrada' });
      }else if(result == 3){
        this.messageService.add({ severity: 'warn', summary: 'Cancelada', detail: 'Sesión no cerrada' });
      }
    });
  }


}
