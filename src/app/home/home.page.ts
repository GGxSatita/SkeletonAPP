import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nombrezzz : string = '';
  public alertando : string = '';
  public apellido : string = '';

  constructor(
    private activatedRouter : ActivatedRoute,

    private alertController : AlertController) {}

  async mostrar(){
    const alert = await this.alertController.create({
      header : 'Nombre de usuario  :'+''+this.nombrezzz,
      message :'Nombre completo  :'+''+this.alertando +' '+ this.apellido,
      buttons : ['Ok'],
    });

    await alert.present();
  }

  ionViewWillEnter(){
    this.activatedRouter.queryParams.subscribe(parametros =>{
      this.nombrezzz = parametros['nombre'] || 'algo por si no sale';
    })
  }


}
