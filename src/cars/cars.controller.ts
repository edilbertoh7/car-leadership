import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
// import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
 // @UsePipes( ValidationPipe )/*para usar el validation pipe 
    // necesitamos instalar class validator y class transformer*/
export class CarsController {

    constructor(
        private readonly carsService: CarsService,//inyectamos el servicio CarsService
    ) {}
    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id:string ) {
        // return{car: this.cars[id]};
        return this.carsService.findOneById(id);
        
    }

    @Post()
    // @UsePipes( ValidationPipe )/*para usar el validation pipe 
    // necesitamos instalar class validator y class transformer*/
    CreateCar( @Body() CreateCarDto: CreateCarDto) {
        // console.log(CreateCarDto);
        return this.carsService.create(CreateCarDto);
        
        // return CreateCarDto
    }

    @Patch(':id')
    UpdateCar( 
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto) {
        return this.carsService.update(id, updateCarDto);
    }

    
    @Delete(':id')
    DeleteCar( @Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
    }
}

