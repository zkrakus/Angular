import { Component } from "@angular/core";
import { ServersComponent } from "../servers/servers.component";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId : number = 10;
    ServerStatus : string = 'offline';

    getServerStatus() {
        return this.ServerStatus;
    }
}