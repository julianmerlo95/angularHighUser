import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() labelName;
  @Input() elements;
  @Input() itemTwo;
  @Input() form;
  @Input() name;
  @Input() item;

  constructor() {
  }

  ngOnInit(): void {
  }

  inputValidate(value, form): any{
    return form.get(value).invalid && form.get(value).touched;
  }

}
