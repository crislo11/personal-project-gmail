import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-component',
  templateUrl: './mail-component.component.html',
  styleUrls: ['./mail-component.component.scss']
})
export class MailComponentComponent implements OnInit {

  mail: any;

  constructor() { 
    this.mail = {
      MailTitle: 'mail title',
      MailBody: 'mail body',
      MailDeparture: 'mail from',
      MailDestination: 'mail to',
    }
  }

  ngOnInit(): void {
  }

}
