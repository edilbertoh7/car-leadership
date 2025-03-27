import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id:1,
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id:2,
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id:3,
            brand: 'leep',
            model: 'cherokee',
        }
    ]

    findAll(){
        return this.cars; // retorna el arreglo de autos
    }

    findOneById(id: number){
        const car = this.cars.find(car => car.id === id); //regresa el auto con el id que se le pase
// si no encuentra el auto con el id que se le pase, regresa un error        
        if(!car)throw new NotFoundException(`Car with id ${id} not found`);
        return  car
    }

}
