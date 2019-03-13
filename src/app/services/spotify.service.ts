import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

  }

  getQuery( query: string){
      const url=`https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
          'Authorization': 'Bearer BQB0ARn2Oyai-i7YPBeREcqVP4COf_3zrEtZ82M8rus45ZY1BFlDq5WDFvbY3PJU1WLpe5cOqUV0Ao1mBqzMf8vPJmkcsCcBj54heeENHXirCG4ErzEnzTc-NMGLlwI8d8ziNTUqrGw'
      });

      return this.http.get(url,{headers});
  }

  getNewReleases(){
      return this.getQuery('browse/new-releases')
                 .pipe( map( data =>  data['albums'].items));
  }

  getArtista( termino:string){
      return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)
                 .pipe( map( data =>  data['artists'].items));
  }
}
