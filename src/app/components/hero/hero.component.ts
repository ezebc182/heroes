import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {
  private editing = false;
  private id: string;

  hero: Hero = {
    name: '',
    bio: '',
    house: 'Marvel'
  };

  constructor(private _heroService: HeroesService,
              private router: Router,
              private route: ActivatedRoute) {
                  this.route.params.subscribe(params => {
                    this.id = params['id'];
                  });
              }

  ngOnInit() {

    this.getHero(this.id);
  }

  save() {
    (this.id === 'new') ? this.newHero() : this.editHero();
  }

  newHero() {
    this._heroService.create(this.hero)
      .subscribe( data => {
        this.router.navigate(['/hero', data.name]);
      }, error => {
        console.error(error);
      });
  }

  editHero() {
    this._heroService.update(this.hero, this.id)
      .subscribe( data => {
        console.log(data);
      }, error => {
        console.error(error);
      });
  }

  getHero(key$: string) {
    this._heroService.get(key$)
        .subscribe(data => (this.hero = data));
  }

  createHero(form: NgForm) {
    this.router.navigate(['/hero', 'new']);
    form.reset({
      house: 'Marvel'
    });
  }

}
