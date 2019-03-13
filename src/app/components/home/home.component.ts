import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
      private spotify: SpotifyService
  ) {
      this.spotify.getNewReleases();
  }

  ngOnInit() {
  }

}
