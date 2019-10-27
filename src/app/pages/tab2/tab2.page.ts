import { Component } from '@angular/core';
import { AtenderService } from '../../services/atender.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public atenderService: AtenderService,
               private router: Router,
               private alertController: AlertController ) {
  }

  async addList() {

    // this.router.navigate(['/tabs/add']);

    const alert = await this.alertController.create({
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List\'s Name'
        }
      ],
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.',
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'Ready',
          role: 'ok',
          handler: (data) => {
            if ( data.title.length > 0 ) {
              const id = this.atenderService.createList( data.title );
              this.router.navigate(['/tabs/add/', id]);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
