import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  mensajeError: string;

  constructor(
      private spotify: SpotifyService
  ) {
      this.spotify.getNewReleases()
      .subscribe( (data :any)=> {
          this.nuevasCanciones=data;
          this.loading=false;
      }, (errorReject)=>{
          this.error=true;
          this.error=this.mensajeError.error.error.message;
      });
  }

  ngOnInit() {
  }

}
