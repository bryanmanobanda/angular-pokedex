import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {  webSocket } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private socket:any; 
  public battleStaticMessage = new Subject<string>();
  // Subject permite convertir informacion a stream (next, complete, error, subscribe)
  // .next -> Enviar informacion al stream
  // .complete -> Cerrar el canal
  // .subscribe -> Subscribirnos al subject
  // .error -> Notificar error

  constructor() { }

  public connect():void{
    this.socket = this.getNewWebSocket();
    this.socket.subscribe({
      next: (data:any)=>{
        this.battleStaticMessage.next(JSON.stringify(data));
      },
    });
  }

  private getNewWebSocket(){
    return webSocket(environment.pokeStaticsUrl);
  }

  close(){
    this.socket.complete();
  }
}
