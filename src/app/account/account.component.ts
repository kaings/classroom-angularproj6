import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() accountId: number;
  @Output() statusChange = new EventEmitter<{id: number, status: string}>();
  @Output() removeElement = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    // console.log(this.accountId, status);
    this.statusChange.emit({id: this.accountId, status: status});
    this.loggingService.loggingStatus(this.accountId, status);
  }

  onRemoveElement() {
    this.removeElement.emit(this.accountId);
  }
}
