import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2', 'Testserver 3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  //Basics Assignments #2
  // username: string = '';

  // onResetUsername() {
  //   this.username = '';
  // }

  /*
  // Basics Assignments #3
  displayDetails: boolean = false;
  clicksArray = [];

  onDisplayDetails(event: Event) {
    this.displayDetails = !this.displayDetails;
    this.clicksArray.push(event.timeStamp);
  }
  */
}
