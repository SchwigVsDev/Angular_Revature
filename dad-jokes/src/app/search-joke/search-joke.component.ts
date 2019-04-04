import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-search-joke',
  templateUrl: './search-joke.component.html',
  styleUrls: ['./search-joke.component.css']
})
export class SearchJokeComponent implements OnInit {

  private _searchTerm: string;
  public _data: any;

  constructor(private _jokeService: JokeService) { }

  get searchTerm(): string { return this._searchTerm; }
  set searchTerm(term: string) { this._searchTerm = term; }

  ngOnInit() {
  }

  onSearch() {
    this._jokeService.searchJoke(this._searchTerm).subscribe(data => {
      this._data = data['results'];
    });
  }

  searchClick(): void {
    this.onSearch();
  }

}
