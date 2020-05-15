import { Component, OnInit } from '@angular/core';
import {Server } from '../server';

@Component({
  selector: 'app-new-server-details',
  templateUrl: './new-server-details.component.html',
  styleUrls: ['./new-server-details.component.css']
})
export class NewServerDetailsComponent implements OnInit {

  public allowServerCreation: boolean = false;
  namedServer : String = "Subhrajit";
  serverAddedName : Server[] = [];
  counter = 0;

  constructor() {
    setTimeout(() => {
      this.allowServerCreation = true;
    }, 5000);
   }

  ngOnInit() {
  }

  updateServerName(){
    const server = new Server(this.counter,this.namedServer, this.getStatus() );
    this.serverAddedName.push(server);
  }

  getStatus(){
    const value = Math.random() > 0.5;
    console.log("Value = " +value);
    return  value ? 'online':'offline';
  }
  allowServer(){
    if(this.allowServerCreation && this.namedServer !=''){
      return true;
    }
    return false;
  }

  getColor(status){
    console.log(status);
    return status === 'online'  ? "green" : "red";
  }

  isServerOnline(status){
    console.log(status);
    return status === 'online'  ? true : false;
  }
}
