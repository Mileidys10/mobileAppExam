import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
    standalone: false

})
export class SelectComponent  implements OnInit {

  @Input() label: string ='';
  @Input() placeholder: string ='';
  @Input() list: Country[] = [];
  @Input() controller: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {}

}
