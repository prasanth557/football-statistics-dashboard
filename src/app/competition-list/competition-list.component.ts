import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {
  // competitions: Competition[];
  competitions : any;                     
  selectedCompetitionId!: string;
  selectedMatchday!: number;
  competetionList = [{
    "competitionName": "Premier League",
    "selectedCompetitionId":"1"
  },  {
    "competitionName": "La Liga",
    "selectedCompetitionId":"2"
  }, {
    "competitionName": "Bundesliga",
    "selectedCompetitionId":"3"
  },{
    "competitionName": "Ligue 1",
    "selectedCompetitionId":"4"
 
  },];
  matchData :any= [];
  constructor(private competitionService: CompetitionService, private router: Router) { }

  ngOnInit(): void {
    // Fetch the list of competitions from your service
    this.competitions = this.competitionService.getCompetitions();
  }
  updateMatchesData(value:any){
    this.matchData.length = 0;
    this.selectedMatchday = 0;
    this.competitions.forEach((element:any) => {
      
      if(element.selectedCompetitionId == value ){
        if(!this.matchData.includes(element.matchday)){
          this.matchData.push(element.matchday);
        }
      }
      });
    }
  
  onSearch(): void {
      if (this.selectedCompetitionId && this.selectedMatchday) {
      this.router.navigate(['/matches',this.selectedCompetitionId, this.selectedMatchday]);
    }
  }
}

