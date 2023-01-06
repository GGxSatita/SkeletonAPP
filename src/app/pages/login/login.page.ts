import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public nombreUsuario: string = '';


  constructor(
    private route : Router
  ) { }


  ngOnInit() {

  }
  prueba(){
    this.route.navigate(
      ['/home'],
      {
        queryParams: {
           nombre : this.nombreUsuario
        }
      }
    )
  }
}
