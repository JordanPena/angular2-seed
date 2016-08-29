import {Injectable} from "@angular/core";

import {Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class QuizService {

  constructor(private _http: Http){

  }

  postExemplo(value: any){
    let json = JSON.stringify(value);
    let params = json;
    //alert(json);
    let headers = new Headers();
    //let options = new RequestOptions({ headers: headers });
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return this._http.post('http://localhost:8020/login', params,
      {headers: headers}).map(res => res.json());



  }
}
