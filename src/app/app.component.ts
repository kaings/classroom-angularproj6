import { Component } from '@angular/core';
import { Account } from './shared/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: Account[] = [
    new Account('Test Account 1', 'Active'),
    new Account('Test Account 2', 'Hidden')
  ];

  onStatusUpdate(updateInfo: {id: number, status: string}) {
    // console.log(this.accounts[updateInfo.id]);
    this.accounts[updateInfo.id].status = updateInfo.status;
  }

  onAccountAdded(newAccountInfo: {name: string, status: string}){
    this.accounts.push(newAccountInfo);
  }

  onAccountRemove(accountId: number) {
    this.accounts.splice(accountId,1);
  }
}
