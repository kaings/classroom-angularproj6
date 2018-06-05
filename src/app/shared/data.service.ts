import { Account } from './account.model';

export class DataService {
  accounts: Account[] = [
    new Account('Test Account 1', 'Active'),
    new Account('Test Account 2', 'Hidden')
  ];

  statusUpdate(updateInfo: {id: number, status: string}) {
    this.accounts[updateInfo.id].status = updateInfo.status;
  }

  accountAdded(newAccountInfo: {name: string, status: string}) {
    this.accounts.push(newAccountInfo);
  }

  accountRemove(accountId: number) {
    this.accounts.splice(accountId, 1);
  }
}
