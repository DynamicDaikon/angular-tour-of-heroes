import { Component, OnInit } from '@angular/core';

import { Hero } from '@app/hero'
import { HeroService } from '@app/service/hero.service';
import { MessageService } from '@app/service/message.service';

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
    private messageService: MessageService
  ) { }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesCompornent: Selected hero id=${hero.id}`);
  }

  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }

}
