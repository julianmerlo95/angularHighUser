import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-user',
  templateUrl: './high-user.component.html',
  styleUrls: ['./high-user.component.scss']
})
export class HighUserComponent implements OnInit {

  constructor() {
    if (!localStorage.getItem('user')) {
          localStorage.setItem('user', JSON.stringify({}));
    }
  }

  ngOnInit(): void {
  }

}
