import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class PersonasService {

    private url: string = "http://localhost:8080/api/personas";

    constructor(private http: Http) { }

    get(): Observable<any> {

        return this.http.get(this.url)
            .pipe(map((res: Response) => res.json()));
    }

    getById(id) {
        return this.http.get(this.getUrl(id)).pipe(
            map(res => res.json()));
    }

    crear(persona) {
        return this.http.post(this.url, JSON.stringify(persona), httpOptions).pipe(
            map(res => res.json()));
    }

    editar(persona) {
        return this.http.put(this.url, JSON.stringify(persona), httpOptions).pipe(
            map(res => res.json()));
    }

    borrar(id) {
        return this.http.delete(this.getUrl(id)).pipe(
            map(res => res));
    }

    private getUrl(id) {
        return this.url + "/" + id;
    }
}
