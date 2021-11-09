import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import {map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  //URL DE LA BASE DE DATOS
  private url = 'https://crudheroes-7ac60-default-rtdb.firebaseio.com'
  constructor( private http: HttpClient) { }


  //Creacion de un post para crear un Heroe en la base de datos 
  crearHeroes( heroe:HeroeModel  ){
    //Va regresar el ID de la base de datos de FIREBASE
  return this.http.post(`${this.url}/heroes.json`,heroe)
  .pipe(
    map (  (resp:any) => {
      heroe.id = resp.name;
      //Todos los objetos son pasados por referencia. 
      return heroe;
    })
  )
  }
}
