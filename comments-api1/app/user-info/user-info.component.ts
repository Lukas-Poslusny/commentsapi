import {Component, OnInit, ɵɵresolveBody} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import { ReturnedData } from '../return-data';
import AccessToken from '../AccessToken';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  private username;
  private email;

  constructor(private router: Router, private userService: UserService, private httpClient: HttpClient) {
  }

  clickedButton() {
    let tempUsersArray = [];
    let url = this.userService.url + "users";
    this.httpClient.post(url, {AccessToken}, {headers: new HttpHeaders});
    this.httpClient.get<ReturnedData>(url).subscribe(
      (data: any) => {
        for (let i = 0; i < data.body.page_count +4; i++) {
          let subUrl = url + '?page=' + i;
          this.httpClient.get<ReturnedData>(subUrl, {
            observe: "response",
          })
          .subscribe(
            data => {
              tempUsersArray = data.body.users.concat(tempUsersArray);
              console.log(tempUsersArray);
            },
            error => {
              console.log(error);
            }
          );
        }

      },
      error => {
        if (error.status === 401) {
          this.router.navigate(["/login"]);
        }
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
