import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, from } from 'rxjs';

import { sp, Web } from '@pnp/sp';
import { environment } from '../environments/environment';

const web = new Web(environment.web);

@Injectable()
export class SPServiceService {
  constructor(private http: Http) {}

  getWebTitle(): Observable<any> {
    return from(web.get());
  }
}
