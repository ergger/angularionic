import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AtenderService } from 'src/app/services/atender.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild( IonList, {static: true} ) ionList: IonList;
  @Input() over = true;

  constructor(public atenderService: AtenderService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {}

  getList( id: number ) {
    this.router.navigate(['/tabs/add/', id]);
  }

  getListPending( list: List ) {
    return list.items.filter( item => item.complete === false).length;
  }

  deleteList( list: List) {
    this.atenderService.destroyList(list);
  }

  async editList( list: List) {
    const alert = await this.alertController.create({
      header: 'Edit List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'List\'s Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
            this.ionList.closeSlidingItems();
          }
        },
        {
          text: 'Ready',
          role: 'ok',
          handler: (data) => {
            if ( data.title.length > 0 ) {
              list.title = data.title;
              this.atenderService.saveStorage();
              this.ionList.closeSlidingItems();
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
