import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Artist{
  name: string
  shortname: string
  reknown: string
  bio: string
  highlight?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Learning-angular';
  query: string;
  artists: any;
  currentArtist: Artist;

  showArtist(artist: Artist){
    
    this.query = artist.shortname
    artist.highlight = !artist.highlight
    this.currentArtist = artist
  }

  constructor(private http: HttpClient){
    this.query = "";
  }

  ngOnInit(): void {
      this.http.get('../assets/data.json').subscribe(
        data => {
          this.artists = data;
        }
      )
  }
}
