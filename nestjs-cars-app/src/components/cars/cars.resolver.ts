import { InternalServerErrorException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarService } from './cars.service';
import { NewCarInput } from './dto/new-car-input';
import { Car } from './entities/car';

@Resolver()
export class CarsResolver {
  constructor(private carsServices: CarService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsServices.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsServices.addCar(newCarData).catch((err) => {
      throw err;
    });
  }
}
