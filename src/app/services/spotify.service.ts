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
          'Authorization': 'Bearer BQBItjIB2ZKanKgfnwR4TaFIuiWHK2enZ5lv56fn7XKfAxvXQ0J7L1ZF8-yk8ZL8bnBeQAshKIIIOY9niGelq75tR5_2rLTaCqsNTuQWNUoLxVR9lzAWgntJ1XUGFeLteuk60vVfeB4'
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
