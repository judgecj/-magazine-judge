import { Http,  Response, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {



  constructor(private http: Http) {}

  loginUser(user){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('https://safe-plateau-91250.herokuapp.com/authentication', { "email":user.email, "password" :user.password, "strategy":"local" }, headers).map(
         (res: Response) => {
              var token = res.json().accessToken;
                window.localStorage.setItem('id_token', token);
                console.log("my localStorage",localStorage.getItem('id_token'))
                
          //  error => console.log(error)
             //(res :Response) => console.log("judge token"res.json()),
          //res => console.log(res.json())
      });

   };


  loggedIn() {
     if (localStorage.getItem('id_token')) {
            // logged in so return true
            return true;
        }else{
            return false;
        }
    ///
      //console.log("my localStorage",localStorage.getItem('id_token'));
   //   return tokenNotExpired();
  }


  logout() {
    localStorage.removeItem('id_token'); 
  }



/*  login(credentials) {
    this.http.post('https://my-app.com/api/authenticate', credentials)
      .map(res => res.json())
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
  }


  loggedIn() {
    return tokenNotExpired();
   }
 */
}