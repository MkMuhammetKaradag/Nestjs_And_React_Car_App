import { CarService } from './cars.service';
export declare class CarsResolver {
    private carsServices;
    constructor(carsServices: CarService);
    cars(): Promise<string>;
}
