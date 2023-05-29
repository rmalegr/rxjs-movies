import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //API_key =  16f8d30a
  private API_URL: string = 'http://www.omdbapi.com/?apikey=16f8d30a'
  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<any> {
    return this.http.get(`${this.API_URL}&s=${searchTerm}`)
  }
}
