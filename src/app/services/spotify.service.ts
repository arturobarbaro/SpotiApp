import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

  }

  getNewReleases(){

      const headers = new HttpHeaders({
          'Authorization': 'Bearer BQCrXCedvCE9TO0iIv4QbYY_-k3_JZi-it6SOW7ejMK7qD3h4SGpf1RWgDOokb60TTOfDrvz19EEf5B5rK8xDG-KPQxiHF44AH9zKgJpmC9fUBG_XuRFKeF0sS_ckqTvfL31Vrrnbbs'
      })

      this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
           .subscribe( data =>{
               console.log(data)
           })
  }
}
