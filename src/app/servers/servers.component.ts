import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serverCreationStatus = "No Server was created!" ;

  serverName = 'DefaultServer';

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true
    }, 3000);

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created!";
  }
  
  onUpdateServer(event:Event){

    console.log(event);

      this.serverName = (<HTMLInputElement> event.target).value;
  }

}
