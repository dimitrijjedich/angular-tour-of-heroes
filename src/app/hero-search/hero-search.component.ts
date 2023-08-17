import { Component } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>;
  private searchTerm = new Subject<string>();

  constructor(private heroService: HeroService) {
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }
}
