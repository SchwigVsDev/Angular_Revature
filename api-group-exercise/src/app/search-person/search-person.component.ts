import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {
  private _searchTerm: string;
  public _data: any;

  constructor(private _searchService: SearchService) { }

  get searchTerm(): string { return this._searchTerm; }
  set searchTerm(term: string) { this._searchTerm = term; }

  ngOnInit() {
  }

  onSearch() {
    this._searchService.searchPerson(this._searchTerm).subscribe(data => {
      this._data = data['results'];
    },
      err => { },
      () => { console.log(this._data); }
    );
  }

  searchClick(): void {
    this.onSearch();
  }

}
