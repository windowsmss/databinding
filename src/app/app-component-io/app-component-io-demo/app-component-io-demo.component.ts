import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-component-io-demo',
  templateUrl: './app-component-io-demo.component.html',
  styleUrls: ['./app-component-io-demo.component.css']
})
export class AppComponentIoDemoComponent implements OnInit {

  @Input() sourceServerName : string = "";

  constructor() { }

  ngOnInit() {
  }

}
