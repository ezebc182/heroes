import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';

// Routing
import { APP_ROUTING } from './app.routes';
import { HeroesService } from './services/heroes.service';
import { HttpModule } from '@angular/http';
import { FirebaseKeysPipe } from './pipes/firebase-keys.pipe';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroComponent, FirebaseKeysPipe],
  imports: [BrowserModule, FormsModule, APP_ROUTING, HttpModule],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
