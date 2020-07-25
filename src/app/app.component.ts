import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numberOfServers = 0 ;

  onServerCreation(numberOfServers:number)
  {
      console.log(numberOfServers);
      this.numberOfServers = numberOfServers ;
  }
}
