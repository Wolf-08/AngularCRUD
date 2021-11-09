import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
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

    Swal.fire({
      icon: 'info',
      title: 'Espere',
      text: 'Guardando informacion',
      allowOutsideClick: false
    });
    Swal.showLoading();
    
    let peticion : Observable<any>

    if(this.heroe.id){
    peticion = this.heroeService.actualizarHeroe(this.heroe)

    }else{
    peticion = this.heroeService.crearHeroes(this.heroe)
    }

    peticion.subscribe( resp =>{

      Swal.fire({
      icon: 'success',
      title: this.heroe.nombre,
      text: ' Se actualizo correctamente',
      })
    })

  }
}
