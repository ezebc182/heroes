import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { Router } from '@angular/router';
import { slugify } from '../../helpers/slugify';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  heroes: Hero[];
  filteredHeroes: Hero[] = [];
  hero: Hero = {
    name: '',
    bio: '',
    house: ''
  };

  loading = true;
  filtering = false;

  constructor(public auth: AuthService, private _heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this._heroesService
      .getAll()
      .then((data: any) => {
        this.heroes = data;
        this.loading = !this.loading;
      })
      .catch(error => console.error(error));

    this._heroesService.currentHero.subscribe(hero => {
      this.hero = hero;
    });
  }

  filterHeroes(term: string) {
    this.filtering = true;
    this.heroes = this._heroesService.filterHeroes(term);
  }

  showHeroDetail(name: string, key$: string) {
    console.log(name);
    console.log(key$);
    this._heroesService
      .get(key$)
      .then((data: any) => {
        this.hero = data;
        this.selectedHero();
      })
      .catch(error => console.error(error));
  }

  selectedHero() {
    this._heroesService.changeHeroSelected(this.hero);
    if (this.hero && this.hero.name !== '') {
      this.router.navigate(['/hero-detail', slugify(this.hero.name)]);
    }
  }

  login() {
    this.auth.login();

  }

}
