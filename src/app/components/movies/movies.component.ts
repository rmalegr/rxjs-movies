import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinct, filter, fromEvent, map, Subscription, switchMap, tap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  search: string = ''
  movies: Movie[] = []
  @ViewChild('movieSearchInput', {static : true})  movieSearchInput!: ElementRef
  movieSuscription!: Subscription

  constructor(private movieService: MovieService) { }
 
    ngOnInit(): void {
   this.movieSuscription = fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
     map((event: Event) => { //mapeamos el termino que 
        const searchTerm = (event.target as HTMLInputElement).value;
        return searchTerm
      }),
      filter((searchTerm: string) => searchTerm.length > 3), //operador mas de 3 caracteres
      debounceTime(500),
      distinct(), //si la palabra anterior es igual a la actual, no ejecuta la funcion
      switchMap((searchTerm: string) => this.movieService.getMovies(searchTerm) ) //cancela la petucion anterior si no encuentra nada 
      ).subscribe((movies: Movie[]) => {
        this.movies = movies !== undefined ? movies : [];
      })
  }





}
