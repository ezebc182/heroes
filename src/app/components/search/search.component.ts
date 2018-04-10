import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: Hero[];
  term: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.filterHeroes(params['term']);
      this.term = params['term'];
    });
  }
}
