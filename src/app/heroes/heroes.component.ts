import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/hero'
import { HEROES } from '@app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

	heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  public ngOnInit(): void {
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
