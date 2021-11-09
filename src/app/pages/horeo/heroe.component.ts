import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-horeo',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();
  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }
  guardar(forma:NgForm){
   if(forma.invalid){ 
    console.log("Heroe no valido")
    return;
    }
  this.heroeService.crearHeroes(this.heroe).subscribe( respuesta => {
    console.log(respuesta);
  })
  }
}
