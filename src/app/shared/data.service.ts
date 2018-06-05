import { Injectable, EventEmitter } from '@angular/core';

import { Account } from './account.model';
import { LoggingService } from './logging.service';

@Injectable()
export class DataService {
  accounts: Account[] = [
    new Account('Test Account 1', 'Active'),
    new Account('Test Account 2', 'Hidden')
  ];

  constructor(private loggingService: LoggingService) {}

  statusUpdateAlert = new EventEmitter<{id: number, status: string}>();

  statusUpdate(updateInfo: {id: number, status: string}) {
    this.accounts[updateInfo.id].status = updateInfo.status;
    this.loggingService.loggingStatus(updateInfo.id, updateInfo.status);
  }

  accountAdded(newAccountInfo: {name: string, status: string}) {
    this.accounts.push(newAccountInfo);
  }

  accountRemove(accountId: number) {
    this.accounts.splice(accountId, 1);
  }
}
