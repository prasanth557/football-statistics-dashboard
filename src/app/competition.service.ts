import { Injectable } from '@angular/core';
import { MatchService } from './match.service';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private matchService: MatchService) {}

  // Fetch a list of competitions from the API
  getCompetitions() {
    return this.matchService.getXmlString();
  }
}
