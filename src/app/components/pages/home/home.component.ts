import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films : Film[] =[];


  constructor(
    private _service: FilmService,
    private _router : Router
    ) { }

  ngOnInit(): void {
    this.loadItems('https://ghibliapi.herokuapp.com/films');
  }

  loadItems(url : string){
    this._service.getAll(url).subscribe(data => this.films = data);
  }

  toInfo(id : string){
    this._router.navigate([`info/${id}`]);
  }
}
