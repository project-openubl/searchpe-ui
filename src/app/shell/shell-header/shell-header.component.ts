import { Component, OnInit } from '@angular/core';
import { MessageHistory } from '../../core/model/message-history.model';
import { MessageService } from '../../core/data/message.service';

@Component({
  selector: 'w4-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss']
})
export class ShellHeaderComponent implements OnInit {

  messageHistory: MessageHistory[];
  constructor(
    public message: MessageService,
  ) { }

  ngOnInit() {
    this.messageHistory = this.message.getHistory();
  }
  clear() {
    this.message.clear();
  }

  logout() {

  }
  profile() {
  }
}
