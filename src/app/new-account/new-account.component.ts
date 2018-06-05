import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  // @Output() createAccount = new EventEmitter<{ name: string, status: string }>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.createAccount.emit({ name: accountName, status: accountStatus });
    this.dataService.accountAdded({name: accountName, status: accountStatus});
  }
}
