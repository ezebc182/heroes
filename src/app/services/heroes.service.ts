import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {
  heroesURI = 'https://heroesapp-6f59a.firebaseio.com/heroes';

  constructor(private http: Http) {}

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
}
