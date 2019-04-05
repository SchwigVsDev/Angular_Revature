import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-ship',
  templateUrl: './search-ship.component.html',
  styleUrls: ['./search-ship.component.css']
})
export class SearchShipComponent implements OnInit {
  private _searchTerm: string;
  public _data: any[];

  constructor(private _searchService: SearchService) { }

  get searchTerm(): string { return this._searchTerm; }
  set searchTerm(term: string) { this._searchTerm = term; }

  ngOnInit() {
  }

  onSearch() {
    this._searchService.searchStarship(this._searchTerm).subscribe(data => {
      console.log("Searching");
      this._data = data['results'];
    },
      err => { },
      () => { 
        for(let e of this._data){
          if(e['cost_in_credits'] != undefined && e['cost_in_credits'] != 'unknown'){
            e['cost_in_credits'] = +e['cost_in_credits'];
          }
          if(e['length'] != undefined && e['length'] != 'unknown'){
            e['length'] = +e['length'];
          }
        }
        console.log(this._data);
      }
    );
  }

  searchClick(): void {
    this.onSearch();
  }

}
