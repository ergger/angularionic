import { Component, OnInit } from '@angular/core';
import { AtenderService } from 'src/app/services/atender.service';
import { Router, ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  name: string;

  constructor( public atenderService: AtenderService,
               private router: Router,
               private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {

      const id: number = params['id'];
      console.log('id = ' + id);
      this.list = this.atenderService.getList(id);
    });
  }

  comeBack() {
    this.router.navigate(['/tabs/tab1']);
  }

  addTask() {
    if (this.name.length > 0) {
      const item = new Item(this.name);
      this.list.items.push(item);
      this.name = '';
      this.atenderService.saveStorage();
    }
  }

  changeCheck( item: Item) {
    const uncomplete = this.list.items.filter(data => {
      return !data.complete;
    }).length;
    if (uncomplete === 0) {
      this.list.ended = new Date();
      this.list.accomplished = true;
    } else {
      this.list.ended = null;
      this.list.accomplished = false;
    }
    console.log(this.list);
    this.atenderService.saveStorage();
  }

  deleteItem( i: number ) {
    this.list.items.splice( i , 1 );
    this.atenderService.saveStorage();
  }
}
