import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  loading: boolean = true;

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
    this._heroesService.getAll()
        .subscribe( data => {
          setTimeout( () => {
              this.heroes = data;
              this.loading = !this.loading;
          }, 2500);
        });
  }

  removeHero (key$: string) {
    this._heroesService.delete(key$)
        .subscribe( data => {
          if (data != null) {
            console.error(data);
          } else {
            delete this.heroes[key$];
            alert('The hero, was successfuly removed!');
          }
        });
  }

}
