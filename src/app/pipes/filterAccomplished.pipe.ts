import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filterAccomplished',
  pure: false
})
export class FilterAccomplishedPipe implements PipeTransform {

  transform(lists: List[], complete: boolean = true): List[] {
    return lists.filter(list =>
      list.accomplished === complete
    );
  }

}
