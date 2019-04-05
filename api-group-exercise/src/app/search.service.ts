import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _urlStarship: string = 'https://swapi.co/api/starships/?search=';
  private _urlPerson: string = 'https://swapi.co/api/people/?search=';
  private temp: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  }

  constructor(private httpServ: HttpClient) { }

  searchStarship(search: string): Observable<string> {
    this.temp = this._urlStarship + search;
    return this.httpServ.get(this.temp, this.httpOptions).pipe(
      map(res => res as string)
    );
  }

  searchPerson(search: string): Observable<string> {
    this.temp = this._urlPerson + search;
    return this.httpServ.get(this.temp, this.httpOptions).pipe(
      map(res => res as string)
    );
  }
}
