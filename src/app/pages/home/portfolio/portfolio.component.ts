import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  images = [
    {
      url: 'assets/images/portfolio.png',
      alt: 'Portfolio'
    },
    {
      url: 'assets/images/portfolio.png',
      alt: 'Portfolio'
    },
    {
      url: 'assets/images/portfolio.png',
      alt: 'Portfolio'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
