import { Component, OnInit, Input } from '@angular/core';
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
  private id: string;
  mode: string;
  disabled: string;
  hero: Hero = {
    name: '',
    bio: '',
    house: 'Marvel'
  };

  constructor(
    private _heroService: HeroesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.mode = params['mode'];
    });
    this.disabled = this.mode === 'read' ? 'disabled' : null;
  }

  ngOnInit() {
    this.getHero(this.id);
  }

  save() {
    this.id === 'new' ? this.newHero() : this.editHero();
  }

  createHero(form: NgForm) {
    this.router.navigate(['/admin', 'hero', 'new', 'create']);
    form.reset({
      house: 'Marvel'
    });
  }

  newHero() {
    this._heroService
      .create(this.hero)
      .then((data: any) => {
        if (data) {
          this.router.navigate(['/hero', data.name, 'create']);
          alert(`${this.hero.name} was successfuly created!`);
        }
      })
      .catch(error => console.error(error));
  }

  editHero() {
    this._heroService
      .update(this.hero, this.id)
      .then(data => {
        alert(`${this.hero.name} was successfuly updated!`);
      })
      .catch(error => console.error(error));
  }

  getHero(key$: string) {
    this._heroService
      .get(key$)
      .then((data: any) => {
        if (data) {
          this.hero = data;
        }
      })
      .catch(error => console.error(error));
  }
}
