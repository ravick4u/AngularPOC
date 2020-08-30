import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {observable, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  options: string[] = ['Angular','React','Vue'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'React'},
    {name: 'Vue'},
  ];

  myConrol = new FormControl();
  filteredOptions: Observable<string[]>;


  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myConrol.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[]{
    const filterValue = value.toLocaleLowerCase();
    return this.options.filter(
      option => option.toLowerCase().includes(filterValue)
    );
  }
  displayOptionName(option): string {
    return option ? option.name : undefined;
  }

}
