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
  loading = true;

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
    this._heroesService.getAll()
        .then( (data: any) => {
            this.heroes = data;
            this.loading = !this.loading;
        })
        .catch( error => console.error(error));
  }

  removeHero (key$: string) {
    const confirm = window.confirm('Are you sure about this?');
    if (!confirm) {
      return;
    }

    this._heroesService
      .delete(key$)
      .then(data => {
        if (data != null) {
          console.error(data);
        } else {
          delete this.heroes[key$];
          alert('The hero, was successfuly removed!');
        }
      })
      .catch(error => console.error(error));
  }

}
