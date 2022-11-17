import { Component, OnInit } from '@angular/core';

interface NavLinks {
  name: String;
  route: String;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  navlink: NavLinks[] = [
    { name: 'About', route: '/#About' },
    { name: 'Portfolio', route: '/#Portfolio' },
    { name: 'Experience', route: '/#Experience' },
    { name: 'Contact', route: '/#Contact' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
