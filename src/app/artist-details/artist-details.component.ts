import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../app.component';
import { ArtistItemsComponent } from '../artist-items/artist-items.component';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  @Input()
  artist: Artist;
  constructor() { }

  ngOnInit(): void {
  }

}
