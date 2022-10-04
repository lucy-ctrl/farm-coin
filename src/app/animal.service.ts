import { Injectable } from '@angular/core';
import { ANIMALS } from './helpers/mockAnimals';
import {Animal} from './models/animal';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  getAnimals(): Observable<Animal[]>{
    const animals = of(ANIMALS);
    return animals;
    }
}
