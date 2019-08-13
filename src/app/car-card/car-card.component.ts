import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() public car: Car;

  constructor() {}

  ngOnInit() {}
}
