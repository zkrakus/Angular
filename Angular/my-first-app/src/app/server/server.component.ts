import { Component } from "@angular/core";
import { ServersComponent } from "../servers/servers.component";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent {
    serverId : number = 10;
    serverStatus : string = 'offline';


    constructor() {
        this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? "green" : "red";
    }
} 