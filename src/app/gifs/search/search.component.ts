import { AnimationQueryMetadata } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  ngOnInit(): void {
  }

  search() {
    let value = this.txtSearch.nativeElement.value
    console.log(value)
    this.txtSearch.nativeElement.value = ''
  }

}
