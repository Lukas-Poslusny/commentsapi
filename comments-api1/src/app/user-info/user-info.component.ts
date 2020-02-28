import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {


  private username = '';
  private email = '';
  private getInfoURL = 'http://85.160.64.233:3000/user';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  clickedButton() {

    this.httpClient.get(this.getInfoURL, {


    }).subscribe(
      (data: any) => {

      }
      , (error) => {
      }
    );

  }

  ngOnInit() {
  }

}
