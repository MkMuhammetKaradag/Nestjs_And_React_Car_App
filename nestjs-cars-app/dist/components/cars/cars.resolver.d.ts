import { CarService } from './cars.service';
import { NewCarInput } from './dto/new-car-input';
import { Car } from './entities/car';
export declare class CarsResolver {
    private carsServices;
    constructor(carsServices: CarService);
    cars(): Promise<Car[]>;
    addNewCar(newCarData: NewCarInput): Promise<Car>;
}
