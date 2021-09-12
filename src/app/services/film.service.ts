import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private _client : HttpClient) { }

  getAll(url : string) : Observable<Film[]>{
    return this._client.get<Film[]>(url);
  }

  getById(id :string, url : string) : Observable<Film>{
    return this._client.get<Film>(`${url}/${id}`);
  }
}
