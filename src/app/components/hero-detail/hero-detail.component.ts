import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

  hero: Hero = {
    name: '',
    bio: '',
    house: ''
  };

  constructor(
    private _heroesService: HeroesService) {}

  ngOnInit() {
    this._heroesService.currentHero.subscribe(hero => {
      localStorage.setItem('hero', JSON.stringify(hero));
      this.hero = hero;
    });
  }

}
