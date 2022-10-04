import { Powerup } from "./powerup"
import { AnimalProduce } from "./animalProduce"
export interface Animal{
    id: number,
    name: string,
    products: AnimalProduce[],
    powerups: Powerup[],
    imagefile: string,
    baseProduceRate: number,
    boostedProduceRate: number,
    maxProduceRate: Number
}