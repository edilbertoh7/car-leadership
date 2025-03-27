import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { CarsController } from './cars/cars.controller';


@Module({
  imports: [CarsModule],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [],
})
export class AppModule {}
