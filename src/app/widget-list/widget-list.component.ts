import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { Brand } from '../brand.model';
import { Car } from '../car.model';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {
  public cars: Observable<Car[]>;
  public brands: Observable<Brand[]>;
  public widgetForm: FormGroup;

  public constructor(private utilService: UtilService) {}

  public ngOnInit() {
    this.widgetForm = new FormGroup({
      brand: new FormControl(),
      cost: new FormControl()
    });

    this.cars = this.loadCars();
    this.brands = this.loadBrands();
  }

  public getCostFormControl(): FormControl {
    return this.widgetForm.get('cost') as FormControl;
  }

  public getBrandFormControl(): FormControl {
    return this.widgetForm.get('brand') as FormControl;
  }

  private loadCars(): Observable<Car[]> {
    return this.widgetForm.valueChanges.pipe(
      debounceTime(400),
      startWith(''),
      switchMap((search) => this.fetchCars(search))
    );
  }

  private loadBrands(): Observable<Brand[]> {
    return this.utilService.createObservableForlist('brands.json');
  }

  private fetchCars(search?: { [s: string]: string }): Observable<Car[]> {
    return this.utilService
      .createObservableForlist('cars.json')
      .pipe(map((cars: Car[]) => this.filterCars(cars, search))) as Observable<
      Car[]
    >;
  }

  private filterCars(cars: Car[], search: { [s: string]: any }): Car[] {
    if (!search) {
      return cars;
    }

    const filteredCarsByCost = this.filterCarsByCost(cars, search.cost);

    const filteredCarsByCostAndBrand = this.filterCarsByBrand(
      filteredCarsByCost,
      search.brand
    );

    return filteredCarsByCostAndBrand;
  }

  private filterCarsByCost(cars: Car[], cost: number): Car[] {
    const filteredCars = cars.filter((car: Car) => {
      if (cost && car.cost > cost) {
        return false;
      }
      return true;
    });

    return filteredCars;
  }

  private filterCarsByBrand(cars: Car[], brand: string): Car[] {
    const filteredCars = cars.filter((car: Car) => {
      if (brand && car.brand !== brand) {
        return false;
      }
      return true;
    });

    return filteredCars;
  }
}
