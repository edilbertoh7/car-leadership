import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'leep',
      model: 'cherokee',
    },
  ];

  findAll() {
    return this.cars; // retorna el arreglo de autos
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id); //regresa el auto con el id que se le pase
    // si no encuentra el auto con el id que se le pase, regresa un error
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(CreateCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      // brand,
      // model
      ...CreateCarDto, // para no poner brand y model se usa el operador spread
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id); //busca el auto por id
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    let carDB = this.findOneById(id); //busca el auto por id
    this.cars = this.cars.filter((car) => car.id !== id); //filtra el arreglo de autos y elimina el auto con el id que se le pase

    return "eliminado carro con id: " + id; //regresa un mensaje de que se elimino el auto
  
  }
}
