import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-farm-home',
  templateUrl: './farm-home.component.html',
  styleUrls: ['./farm-home.component.css']
})
export class FarmHomeComponent implements OnInit {

  constructor(private animalService:AnimalService) { }

  animals: Animal[] =[];
  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals():void{
    this.animalService.getAnimals()
    .subscribe(animals => this.animals = animals)
  }

}
