import { Item } from './item.model';

export class List {
    id: number;
    title: string;
    create: Date;
    ended: Date;
    accomplished: boolean;
    items: Item[];

    constructor( title: string ) {
        this.title = title;
        this.create = new Date();
        this.accomplished = false;
        this.items = [];
        this.id = new Date().getTime();
    }

}
