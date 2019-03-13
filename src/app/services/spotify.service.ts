import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

  }

  getNewReleases(){

      const headers = new HttpHeaders({
          'Authorization': 'Bearer BQB0ARn2Oyai-i7YPBeREcqVP4COf_3zrEtZ82M8rus45ZY1BFlDq5WDFvbY3PJU1WLpe5cOqUV0Ao1mBqzMf8vPJmkcsCcBj54heeENHXirCG4ErzEnzTc-NMGLlwI8d8ziNTUqrGw'
      })

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
           .pipe( map( data =>  data['albums'].items));
  }

  getArtista( termino:string){
      const headers = new HttpHeaders({
          'Authorization': 'Bearer BQCrXCedvCE9TO0i Iv4QbYY_-k3_JZi-it6SOW7ejMK7qD3h4SGpf1RWgDOokb60TTOfDrvz19EEf5B5rK8xDG-KPQxiHF44AH9zKgJpmC9fUBG_XuRFKeF0sS_ckqTvfL31Vrrnbbs'
      })

      return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=15`, { headers })
            .pipe( map( data =>  data['artists'].items));
  }
}
