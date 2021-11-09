import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-horeo',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();
  constructor() { }

  ngOnInit(): void {
  }
guardar(forma:NgForm){
  console.log(forma);

}
}
