import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import {map } from 'rxjs/operators'
import { ObjectUnsubscribedError } from 'rxjs';

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

  actualizarHeroe(heroe:HeroeModel){
    //.json para apuntar a la rest API

    const heroeTemp ={
      ...heroe
    }
    //Elimicacion del ID duplicado
    delete heroeTemp.id
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`,heroeTemp)

  }

  getHeroes(){

    return this.http.get(`${this.url}/heroes.json`)
    .pipe(
      map( this.crearArrayHeroes) //Modificacion de la respuesta para convertirla en un array iterable
    )
  }

  private crearArrayHeroes( heroesObj:   any){
    //Crear el tipo de dato de heroe y array vacio
    const heroes: HeroeModel[] = [];
    //Recorrer el objeto por llaves like python

    if( heroesObj === null ) { return []; }
    Object.keys( heroesObj ).forEach( key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });
    return heroes;

   

  }



}


