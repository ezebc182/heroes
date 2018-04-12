import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

// Routing
import { APP_ROUTING } from './app.routes';

// Pipes
import { FirebaseKeysPipe } from './pipes/firebase-keys.pipe';
import { ImgPipe } from './pipes/img.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MbPipe } from './pipes/mb.pipe';
import { AppearencePipe } from './pipes/appearence.pipe';

// Services
import { HeroesService } from './services/heroes.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FirebaseUploadService } from './services/firebase-upload.service';

import { environment } from '../environments/environment';

// Directives
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    FirebaseKeysPipe,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ImgPipe,
    TruncatePipe,
    HeroDetailComponent,
    AppearencePipe,
    UploadFileComponent,
    NgDropFilesDirective,
    MbPipe,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    HeroesService,
    AuthService,
    AuthGuardService,
    FirebaseUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
