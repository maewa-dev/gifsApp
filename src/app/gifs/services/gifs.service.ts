import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor (private http: HttpClient) { }

  private apiKey: string = 'UXOcSsIo2kQ2hNUWwrfHpD01fO7jmdyV';
  private _historial: string[] = [];

  public results: Gif[] = [];

  get historial() {
    return [...this._historial]
  }

  searchGifs(query: string = '') {
    query = query.trim().toLowerCase();

    if ( !this._historial.includes(query) ) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10);
    }

    this.http.get<SearchGifResponse>(`https://api.giphy.com/v1/gifs/search?api_key=UXOcSsIo2kQ2hNUWwrfHpD01fO7jmdyV&limit=10&q=${ query }`)
    .subscribe( (response) => {
      this.results = response.data
    }) 

  }
}
