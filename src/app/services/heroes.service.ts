import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {
  private heroes: Hero[] = [];
  private hero: Hero;
  private heroSource = new BehaviorSubject<Hero>(this.hero);

  currentHero = this.heroSource.asObservable();

  heroesURI = 'https://heroesapp-6f59a.firebaseio.com/heroes';

  constructor(private http: Http) {}

  changeHeroSelected(hero: Hero) {
    this.heroSource.next(hero);
  }

  create(hero: Hero) {
    const body = JSON.stringify(hero);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.heroesURI}.json`;

    return this.http.post(url, body, { headers }).map(res => {
      return res.json();
    });
  }

  update(hero: Hero, key$: string) {
    const body = JSON.stringify(hero);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.heroesURI}/${key$}.json`;

    return this.http.put(url, body, { headers }).map(res => {
      return res.json();
    });
  }

  get(key$: string) {
    const url = `${this.heroesURI}/${key$}.json`;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, { headers }).map(res => {
      return res.json();
    });
  }

  getAll() {
    const url = `${this.heroesURI}.json`;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, { headers }).map(res => {
      this.heroes = res.json();
      return res.json();
    });
  }

  delete(key$: string) {
     const url = `${this.heroesURI}/${key$}.json`;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.delete(url, { headers }).map(res => {
      return res.json();
    });
  }

  filterHeroes(term: string) {
    const searchResults: any[] = [];
    const keys = [];
      for (const key in this.heroes) {
        if (key) {
          const hero = this.heroes[key];
          keys.push(key);
          if (hero.name.toLowerCase().indexOf(term.toLowerCase())  !== -1) {
           searchResults.push(this.heroes[key]);
          }
        }
      }

      return searchResults;
    }
}
