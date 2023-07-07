import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticsListComponent } from './statics-list/statics-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StaticsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'statics-list', component:StaticsListComponent},]),
  ]
})
export class StatisticsModule { }
