import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: HeroeModel[] = [];
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    //obtenccion de los heroes 
    this.heroesService.getHeroes()
    .subscribe(respuesta =>{
      console.log(respuesta);
      this.heroes = respuesta;
    })
  }

}
