import { AnimationQueryMetadata } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private gifsService : GifsService) { }

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  ngOnInit(): void {
  }

  search() {
    let value = this.txtSearch.nativeElement.value;
    this.txtSearch.nativeElement.value = '';

    this.gifsService.searchGifs( value )
  }

}
