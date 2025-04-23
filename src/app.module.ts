import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { CarsController } from './cars/cars.controller';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';


@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
