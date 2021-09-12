import { Component, OnInit } from '@angular/core';

import { Hero } from '@app/hero'
import { HeroService } from '@app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
  ) { }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }

}
