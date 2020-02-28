import {Component, OnInit} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import AccessToken from '../AccessToken';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  private logoutURL = 'http://85.160.64.233:3000/session/logout';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  clickedButton() {
    const headers = new HttpHeaders().set('User-Token', AccessToken.token);
    this.httpClient.delete(this.logoutURL, {
      headers
    }).subscribe(
      (data: any) => {
        AccessToken.token = '';
        this.router.navigate(['/home']);
      }, (error) => {
      }
    );
  }
}
