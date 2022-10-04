import { Animal } from "./animal"

export interface UserFarm{
    id:number
    username: string
    animals: Animal[],
    money: number,
    maxAnimals: number
}