import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import AccessToken from '../AccessToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private password = '';
  private email = '';
  private loginURL = 'http://85.160.64.233:3000/session/login';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  clickedButton() {
    this.httpClient.post(this.loginURL, {
      email: this.email,
      password: this.password,
    }).subscribe(
      (data: any) => {
        AccessToken.token = data.AccessToken;
        this.router.navigate(['/logged-in']);
      }, (error) => {
      }
    );
  }


}
