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
          'Authorization': 'Bearer BQDQ5MWIniCXLBkATHyzIbVLlDXqPiyOGsT1COyyD8W9P_7QW9Tgqb3Y2skNngIc4CIrHuuiV8BufR_t8nSobvEpX_-60A7Psxqpv9RGxdfAUXdprBsIRiY2r0ghbeHA89ZATWft8JQ'
      });

      return this.http.get(url,{headers});
  }

  getNewReleases(){
      return this.getQuery('browse/new-releases')
                 .pipe( map( data =>  data['albums'].items));
  }

  getArtistas( termino:string){
      return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)
                 .pipe( map( data =>  data['artists'].items));
  }

  getArtista( id:string){
      return this.getQuery(`artists/${id}`);
                 //.pipe( map( data =>  data['artists'].items));
  }

  getTopTracks( id:string){
      return this.getQuery(`artists/${id}/top-tracks?country=ES`)
      .pipe( map( data =>  data['tracks']));
  }
}
