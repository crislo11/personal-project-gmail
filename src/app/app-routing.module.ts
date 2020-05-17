import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit { 

  mail: any;

  constructor () {
    this.mail = {
      MailTitle: 'mail title',
      MailBody: 'mail body',
      departure: 'mail from',
      destinations: 'mail to',
    }
  }

  ngOnInit() {

  }
}
