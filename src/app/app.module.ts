import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { ServerDetailsComponent } from './server-details/server-details.component';
import { NewServerDetailsComponent } from './new-server-details/new-server-details.component';
import { AppComponentIoDemoComponent } from './app-component-io/app-component-io-demo/app-component-io-demo.component';
import { OldServerComponent } from './old-server/old-server.component';

@NgModule({
  declarations: [
    AppComponent,    
    ServerDetailsComponent,
    NewServerDetailsComponent,
    AppComponentIoDemoComponent,
    OldServerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
