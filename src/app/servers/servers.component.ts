import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serverCreationStatus = "No Server was created!" ;

  //serverName = 'DefaultServer';

   servers = [] ;
  
   @Output() onServerCreated = new EventEmitter<number> ();

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true
    }, 3000);

  }

  ngOnInit(): void {
  }

  onCreateServer(serverName){
    console.log(serverName.value)
    this.servers.push(serverName.value) ;

    this.serverCreationStatus = "Server was created!";

    this.onServerCreated.emit(this.servers.length);
  }
  
  onUpdateServer(event:Event){

    console.log(event);

      //this.serverName = (<HTMLInputElement> event.target).value;
  }

}
