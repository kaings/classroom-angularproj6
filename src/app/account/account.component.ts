import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() accountId: number;
  @Output() statusChange = new EventEmitter<{id: number, status: string}>();

  constructor() { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    // console.log(this.accountId, status);
    this.statusChange.emit({id: this.accountId, status: status});
  }

}
