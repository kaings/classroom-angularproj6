import {Component, OnInit, Output, EventEmitter, DoCheck, AfterViewInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {assertNumber} from '@angular/core/src/render3/assert';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit, DoCheck, AfterViewInit {
  // @Output() createAccount = new EventEmitter<{ name: string, status: string }>();

  constructor(private dataService: DataService) {
    /* when passing more than 1 parameter, use some variable as kind of like an object as example below*/
    /*this.dataService.statusUpdateAlert.subscribe(
      (serverInfo) => alert('Status of server #' + serverInfo.id + ' has been updated to: ' + serverInfo.status)
    );*/
  }

  ngOnInit() {
    /* when passing more than 1 parameter, use some variable as kind of like an object as example below*/
    this.dataService.statusUpdateAlert.subscribe(
      (serverInfo) => alert('Status of server #' + serverInfo.id + ' has been updated to: ' + serverInfo.status)
    );
    console.log('new acount page... ngOnInit');
  }

  ngDoCheck() {
    /* when passing more than 1 parameter, use some variable as kind of like an object as example below*/
    /*this.dataService.statusUpdateAlert.subscribe(
      (serverInfo) => alert('Status of server #' + serverInfo.id + ' has been updated to: ' + serverInfo.status)
    );*/
    console.log('new account page... some change detected');
  }

  ngAfterViewInit() {
    /* when passing more than 1 parameter, use some variable as kind of like an object as example below*/
    /*this.dataService.statusUpdateAlert.subscribe(
      (serverInfo) => alert('Status of server #' + serverInfo.id + ' has been updated to: ' + serverInfo.status)
    );*/
    console.log('new acount page... ngAfterViewInit');
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.createAccount.emit({ name: accountName, status: accountStatus });
    this.dataService.accountAdded({name: accountName, status: accountStatus});
  }
}
