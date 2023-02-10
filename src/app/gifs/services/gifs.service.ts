import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor (private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.results = JSON.parse(localStorage.getItem('resultados')!) || []
  }

  private apiKey: string = 'UXOcSsIo2kQ2hNUWwrfHpD01fO7jmdyV';
  private urlService: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public results: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLowerCase();

    if ( !this._historial.includes(query) ) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams().set('api_key', this.apiKey).set('limit', '10').set('q', query);

    console.log(params.toString());

    this.http.get<SearchGifResponse>(`${ this.urlService }/search`, { params })
    .subscribe( (response) => {
      this.results = response.data;
      localStorage.setItem('resultados', JSON.stringify(this.results));

    }) 

  }
}
