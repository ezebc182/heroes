import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'hero-detail/:id', component: HeroDetailComponent},
     { path: 'about', component: AboutComponent},
    { path: 'admin', children: [
        { path: 'hero/:id/:mode', component: HeroComponent },
        { path: 'heroes', component: HeroesComponent },
         { path: '**', pathMatch: 'full', redirectTo: '/admin/heroes'}
    ], canActivate: [AuthGuardService] },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
