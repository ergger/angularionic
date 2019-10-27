import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class AtenderService {

  lists: List[] = [];


  constructor() {
    this.loadStorage();
  }

  createList(title: string) {
    const list = new List(title);
    if (this.lists == null) {
      this.lists = [];
    }
    this.lists.push(list);
    this.saveStorage();
    return list.id;
  }

  destroyList(list: List) {
    this.lists = this.lists.filter(listLive =>
      listLive.id !== list.id
    );
  }

  getList(id: number|string) {
    id = Number(id);
    return this.lists.find(data => data.id === id);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if (localStorage != null) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    } else {
      this.lists = [];
    }
  }
}
