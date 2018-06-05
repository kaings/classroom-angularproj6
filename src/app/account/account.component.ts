import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LoggingService } from '../shared/logging.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() accountId: number;
  // @Output() statusChange = new EventEmitter<{id: number, status: string}>();
  // @Output() removeElement = new EventEmitter<number>();

  constructor(private loggingService: LoggingService, private dataService: DataService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    // console.log(this.accountId, status);
    // this.statusChange.emit({id: this.accountId, status: status});
    // this.loggingService.loggingStatus(this.accountId, status);
    this.dataService.statusUpdate({id: this.accountId, status: status});
    this.dataService.statusUpdateAlert.emit({id: this.accountId, status: status});
  }

  onRemoveElement() {
    // this.removeElement.emit(this.accountId);
    this.dataService.accountRemove(this.accountId);
  }
}
