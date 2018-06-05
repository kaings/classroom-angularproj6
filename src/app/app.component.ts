import {Component, OnInit} from '@angular/core';
import { Account } from './shared/account.model';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [DataService]
})
export class AppComponent implements OnInit{
  accounts: Account[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.accounts = this.dataService.accounts;
  }

  /*
  onStatusUpdate(updateInfo: {id: number, status: string}) {
    // console.log(this.accounts[updateInfo.id]);
    // this.accounts[updateInfo.id].status = updateInfo.status;
  }

  onAccountAdded(newAccountInfo: {name: string, status: string}){
    // this.accounts.push(newAccountInfo);
  }

  onAccountRemove(accountId: number) {
    // this.accounts.splice(accountId,1);
  }
  */
}
