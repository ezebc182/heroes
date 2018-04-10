import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { Router } from '@angular/router';
import { slugify } from '../../helpers/slugify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;

  constructor(private _heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this._heroesService.getAll().subscribe(data => {
      setTimeout(() => {
        this.heroes = data;
      }, 700);
    });
     this._heroesService.currentHero.subscribe(hero => {
       this.hero = hero;
     });
  }

  filterHeroes(term: string) {
     this.heroes = this._heroesService.filterHeroes(term);
  }

  showHeroDetail( name: string, key$: string) {
    this._heroesService.get(key$).subscribe(data => {
      this.hero = data;
    });

    setTimeout(() => {
       this.selectedHero();
    }, 1500);
  }

  selectedHero() {
    this._heroesService.changeHeroSelected(this.hero);
    this.router.navigate(["/hero-detail", slugify(this.hero.name)]);
  }
}
