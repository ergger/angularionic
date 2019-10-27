import { NgModule } from '@angular/core';
import { FilterAccomplishedPipe } from './filterAccomplished.pipe';

@NgModule({
  declarations: [FilterAccomplishedPipe],
  exports: [FilterAccomplishedPipe]
})
export class PipesModule { }
