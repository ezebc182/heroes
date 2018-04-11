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

  constructor(private http: Http) {
    this.getAll()
      .then((data: any) => {
        this.heroes = data;
      })
      .catch(error => console.error(error));
  }

  changeHeroSelected(hero: Hero) {
    this.heroSource.next(hero);
  }

  create(hero: Hero) {
    const body = JSON.stringify(hero);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.heroesURI}.json`;

    return new Promise((resolve, reject) => {
      this.http
        .post(url, body, { headers })
        .map(res => {
          return res.json();
        })
        .subscribe(data => {
            resolve(data);
          }, error => reject(error));
    });
  }

  update(hero: Hero, key$: string) {
    const body = JSON.stringify(hero);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.heroesURI}/${key$}.json`;

    return new Promise((resolve, reject) => {
     this.http
       .put(url, body, { headers })
       .map(res => {
         return res.json();
       })
       .subscribe(data => {
           resolve(data);
         }, error => reject(error));
    });
  }

  get(key$: string) {
    const url = `${this.heroesURI}/${key$}.json`;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http
        .get(url, { headers })
        .map(res => {
          return res.json();
        })
        .subscribe(data => {
            resolve(data);
          }, error => reject(error));
      });
  }

  getAll() {
    const url = `${this.heroesURI}.json`;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http
        .get(url, { headers })
        .map(res => {
          return res.json();
        })
        .subscribe(data => {
            resolve(data);
          }, error => reject(error));
    });
  }

  delete(key$: string) {
      const url = `${this.heroesURI}/${key$}.json`;
      const headers = new Headers({
      'Content-Type': 'application/json'
      });

     return new Promise((resolve, reject) => {
       this.http
         .delete(url, { headers })
         .map(res => {
           return res.json();
         })
         .subscribe(data => {
             resolve(data);
           }, error => reject(error));
     });
  }

  filterHeroes(term: string) {
    const filteredHeroes: Hero[] = [];
    const searchResults: Hero[] = [];
      for (const key in this.heroes) {
        if (key) {
          const hero = this.heroes[key];
          if (hero.name.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
            filteredHeroes[key] = (this.heroes[key]);
            searchResults[key] = (filteredHeroes[key]);
          }
        }
      }
      return searchResults;
    }
}
