import {
  Inject
} from 'angular2/core';
import {
  Http
} from 'angular2/http';
import 'rxjs/add/operator/map';

export class courseService {


  constructor(@Inject(Http) http: Http) {
    this.http = http
  }

  getBatches() {
    var url = 'http://localhost:8000/api/v1/appData/courses';
    return this.http.get(url).map(res => res.json());
  }


}
