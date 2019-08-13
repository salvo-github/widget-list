import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public list: Observable<any[]>;
  @Input() public refProperty: string;
  @Input() public label: string;

  constructor() {}

  ngOnInit() {}
}
