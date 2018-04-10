import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
// Routing
import { APP_ROUTING } from './app.routes';

// Pipes
import { FirebaseKeysPipe } from './pipes/firebase-keys.pipe';
import { ImgPipe } from './pipes/img.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

// Services
import { HeroesService } from './services/heroes.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    FirebaseKeysPipe,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    AboutComponent,
    ImgPipe,
    TruncatePipe,
    HeroDetailComponent
  ],
  imports: [BrowserModule, FormsModule, APP_ROUTING, HttpModule],
  providers: [HeroesService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
