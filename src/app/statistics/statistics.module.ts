import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticsListComponent } from './statics-list/statics-list.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [StaticsListComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterModule.forChild([
      {path: 'statics-list', component:StaticsListComponent},]),
  ]
})
export class StatisticsModule { }
