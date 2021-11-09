import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: HeroeModel[] = [];
  cargando = false;
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.cargando = true;
    //obtenccion de los heroes 
    this.heroesService.getHeroes()
    .subscribe(respuesta =>{
      console.log(respuesta);
      this.heroes = respuesta;
      this.cargando = false;
    })
  }

  borrarHeroe(heroe:any,i:number)
  {

    Swal.fire({
      title: "Estas seguro?",
      icon: 'question',
      text: `Esta seguro que desea borrar a ${heroe.nombre}`,
      showCancelButton: true,
      showConfirmButton: true,
    }).then( resp => {
      if(resp.value){
        this.heroes.splice(i,1);
        this.heroesService.borrarHeroe(heroe.id).subscribe()
      }
    })
      }
  
}
