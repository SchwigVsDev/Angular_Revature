import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css']
})
export class RandomJokeComponent implements OnInit {

  public _joke = 'Click the button to get a random joke.';

  constructor(private _jokeService: JokeService) { }

  ngOnInit() {
  }

  public randomJoke(): void {
    this._jokeService.getJoke().subscribe(data => {
      this._joke = data['joke'];
    });
  }

}
