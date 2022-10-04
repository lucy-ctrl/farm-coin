import { Animal} from "../models/animal";
import {AnimalProduce} from "../models/animalProduce";
import { UserFarm } from "../models/userFarm";

const chickenProducts: AnimalProduce ={id:1, name:"egg", img:"../imgs/egg.png"}
const cowProducts: AnimalProduce ={id:2, name:"steak", img:"../imgs/steak.png"}


export const ANIMALS: Animal[] =
[
    {id: 1, name:'Cow', products:[cowProducts], powerups:[], imagefile:"assets/cow.png", baseProduceRate:10, boostedProduceRate:0, maxProduceRate:1000 },
    {id: 2, name:'Chicken', products:[chickenProducts], powerups:[], imagefile:"assets/chicken.png", baseProduceRate:5, boostedProduceRate:0, maxProduceRate:20 }
]


export var USERFARM: UserFarm ={
    id:1,
    username:"testing",
    animals:[ANIMALS[0], ANIMALS[1]],
    money:100,
    maxAnimals:5
}
