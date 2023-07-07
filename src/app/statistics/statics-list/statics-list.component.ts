import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StatisticsService } from 'src/app/statistics.service';

@Component({
  selector: 'app-statics-list',
  templateUrl: './statics-list.component.html',
  styleUrls: ['./statics-list.component.scss']
})
export class StaticsListComponent implements OnInit, OnDestroy {
  battleData: Subject<string>;

  constructor(private staticsService: StatisticsService) { }

  ngOnInit(): void {
    this.staticsService.connect();
    /*this.staticsService.battleStaticMessage.subscribe((data) =>{
      console.log(data);
    });*/
    this.battleData = this.staticsService.battleStaticMessage;
  }

  ngOnDestroy(): void{
    this.staticsService.close();
  }

}
