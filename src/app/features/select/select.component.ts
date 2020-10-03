import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit {

  @Input() elements
  @Input() form
  @Input() labelName
  @Input() name
  @Input() item
  @Input() itemTwo

  constructor() { }

  ngOnInit(): void {
  }

}