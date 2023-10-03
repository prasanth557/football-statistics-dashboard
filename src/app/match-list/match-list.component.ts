import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../match.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import * as converter from 'xml2js';

export interface MatchData {
  competitionName: string;
  selectedCompetitionId: string;
  matchday: string;
  teams: object;
  result:string;
  kickoff_time:string
}
@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,RouterModule]
})
export class MatchListComponent implements OnInit {
  displayedColumns: string[] = ['Teams', 'kickoff_time', 'result'];
  dataSource: MatTableDataSource<MatchData> | any ;
  matches: any;
  selectedMatchday: any;
  selectedCompetitionId: any;
  xml = "<root>Hello xml2js!</root>";
  parsedString: any;
   parseString = converter.parseString(this.xml,(err:Error|null,result:any)=>{
console.log(result);
this.parsedString = result;
  });
   
  sortedData: any;
  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    // Get competitionId and matchday from the route parameters
    this.route.params.subscribe((params) => {
      const competitionId = params['competitionId'];
      const matchday = +params['matchday']; // Convert to a number

      // Fetch matches for the specified competition and matchday
      this.matches = this.matchService.getMatches(competitionId, matchday);
      this.dataSource = this.matches;

      var parsedString="";
      var result;
      var xmlString = this.matchService.getXmlString();
      console.log("Inside matchlist xmlString: "+ xmlString);
    var parseString = converter.parseString(xmlString,(err:Error|null,result:any)=>{
  console.log("Inside matchlist xmlString: "+ result);
    parsedString = result;
   });
   //var xml = "<root>Hello xml2js!</root>";
  var parser = require('xml2js');
  var json = parser.Parser().parseString(parsedString,(e: any,r: any)=>{result =r})
  
  console.log("Inside Service result: "+ result);
    return parsedString;
    });
  }

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: { Teams: any; result: string; kickoff_time: string;  }, b: { Teams: any; result: string; kickoff_time: string; }) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Teams1':
          return this.compare(a.Teams, b.Teams, isAsc);
        case 'result1':
          return this.compare(a.result, b.result, isAsc);
        case 'kickoff_time':
          return this.compare(a.kickoff_time, b.kickoff_time, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource = this.sortedData;
  }
   compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
