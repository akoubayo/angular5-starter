import { Component, OnInit } from '@angular/core';
import { BaseService }       from './../../services/api/base.service';

import { environment }       from './../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'app';
  public orange = " _blanche"
  public connexion = {
    username:'',
    password:'',
    grant_type:environment.grant_type,
    client_id:environment.client_id,
    client_secret:environment.client_secret
  }

  constructor(private _base_api:BaseService) { }

  ngOnInit() {
  }

  submit() {
    this._base_api.post('oauth/token', this.connexion).subscribe(res => {
      console.log(res);
    })
  }

}
