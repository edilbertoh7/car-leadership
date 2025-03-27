import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService,//inyectamos el servicio CarsService
    ) {}
    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id:number ) {
        // return{car: this.cars[id]};
        return this.carsService.findOneById(+id);
        
    }

    @Post()
    CreateCar( @Body() body: any) {
        return body
    }

    @Patch(':id')
    UpdateCar( @Body() body: any) {
        return body
    }

    
    @Delete(':id')
    DeleteCar( @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'delete',
            id
        }
    }
}

