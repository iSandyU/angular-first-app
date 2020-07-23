import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{

    serverId:number = 10;

    serverStatus: String = "Offline" ;

    constructor(){
        this.serverStatus = Math.random() > 0.5? 'Online' : 'Offline' ;
    }

    getColor(){

        return this.serverStatus === 'Online' ? 'green' :'red' ;

    }
}