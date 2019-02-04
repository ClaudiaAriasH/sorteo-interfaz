import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SorteoService {

  private url: string = "http://localhost:8080/api/sorteo";

  constructor(private http: Http) { }

  comenzarSorteo(): Observable<any> {
      return this.http.get(this.url)
          .pipe(map((res: Response) => res.json()));
  }

}
