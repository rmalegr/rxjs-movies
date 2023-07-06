import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
// instalar sweetalert2
import Swal from 'sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardMovieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // sweetalert2

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
