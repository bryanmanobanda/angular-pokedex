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

  chartConfig = {
    xAxis: true,
    yAxis:true
  };

  dataList: any[]=[];

  constructor(private staticsService: StatisticsService) { }

  ngOnInit(): void {
    this.staticsService.connect();
    this.staticsService.battleStaticMessage$.subscribe((data) =>{
      let dataObj  = JSON.parse(data);
      this.addOrUpdateData(dataObj.winner);
      this.dataList = [...this.dataList];
    });
    //this.battleData = this.staticsService.battleStaticMessage;
  }

  addOrUpdateData( id: number):void{
    var index = this.dataList.findIndex((item) => {
      return item.name === id.toString;
    });

    if(index != -1){
      this.dataList[index].value = this.dataList[index].value + 1;
    }else{
      this.dataList.push({
        name: id.toFixed(),
        value: 1,
      });
    }
  }

  ngOnDestroy(): void{
    this.staticsService.close();
  }

}
