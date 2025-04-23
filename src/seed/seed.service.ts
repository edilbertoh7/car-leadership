import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';


// BRANDS_SEED
// CARS_SEED
@Injectable()
export class SeedService {
  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService,
  ) {}

  populateDB() { 
    this.CarsService.fillCarsWithSeedData(CARS_SEED);
    this.BrandsService.fillBrandsWithSeedData(BRANDS_SEED);
    
    return {'status': 'Seed executed'};

  }
}
