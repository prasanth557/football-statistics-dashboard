import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import CompetitionData from '../assets/';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private apiUrl = '../assets/sampledata.xml'; // Replace with your API URL

  
  constructor(private http: HttpClient) { }
  competetionData = [
    {
      "competitionName": "Premier League",
      "selectedCompetitionId":"1",
      "matchday": 1,
      "teams": {
        "home": "Manchester United",
        "away": "Manchester City"
      },
      "result": "2-1",
      "kickoff_time": '2023-03-01 1:30:00'
    },
    {
      "competitionName": "Premier League",
      "selectedCompetitionId":"1",
      "matchday": 1,
      "teams": {
        "home": "Real Madrid",
        "away": "Manchester City"
      },
      "result": "1-0",
      "kickoff_time": '2023-03-10 1:30:00'
    },
    {
      "competitionName": "Premier League",
      "selectedCompetitionId":"1",
      "matchday": 1,
      "teams": {
        "home": "Manchester United",
        "away": "Real Madrid"
      },
      "result": "2-1",
      "kickoff_time": '2023-10-01 2:30:00'
    },
    {
      "competitionName": "Premier League",
      "selectedCompetitionId":"1",
      "matchday": 2,
      "teams": {
        "home": "Manchester United",
        "away": "Manchester City"
      },
      "result": "1-0",
      "kickoff_time": '2023-10-01 2:30:00'
    },
    {
      "competitionName": "Premier League",
      "selectedCompetitionId":"1",
      "matchday": 2,
      "teams": {
        "home": "Real Madrid",
        "away": "Manchester City"
      },
      "result": "2-0",
      "kickoff_time": '2023-10-01 2:30:00'
    },
    {
      "competitionName": "Premier League",
      "selectedCompetitionId":"1",
      "matchday": 2,
      "teams": {
        "home": "Real Madrid",
        "away": "Manchester City"
      },
      "result": "1-0",
      "kickoff_time": '2023-10-01 2:30:00'
    },
    {
      "competitionName": "La Liga",
      "selectedCompetitionId":"2",
      "matchday": 1,
      "teams": {
        "home": "Real Madrid",
        "away": "Barcelona"
      },
      "result": "1-0",
      "kickoff_time": "2023-09-12 20:00:00"
    },
    {
      "competitionName": "La Liga",
      "selectedCompetitionId":"2",
      "matchday": 1,
      "teams": {
        "home": "Real Madrid",
        "away": "Manchester United"
      },
      "result": "2-1",
      "kickoff_time": "2023-09-13 20:00:00"
    },
    {
      "competitionName": "La Liga",
      "selectedCompetitionId":"2",
      "matchday": 1,
      "teams": {
        "home": "Real Madrid",
        "away": "Manchester City"
      },
      "result": "1-1",
      "kickoff_time": "2023-09-20 21:00:00"
    },
    {
      "competitionName": "Bundesliga",
      "selectedCompetitionId":"3",
      "matchday": 1,
      "teams": {
        "home": "Manchester United",
        "away": "Real Madrid"
      },
      "result": "2-1",
      "kickoff_time": "2023-10-01 4:30:00"
    },
    {
      "competitionName": "Bundesliga",
      "selectedCompetitionId":"3",
      "matchday": 1,
      "teams": {
        "home": "Barcelona",
        "away": "Real Madrid"
      },
      "result": "1-1",
      "kickoff_time": "2023-10-01 4:30:00"
    },
    {
      "competitionName": "Bundesliga",
      "selectedCompetitionId":"3",
      "matchday": 2,
      "teams": {
        "home": "Manchester United",
        "away": "Real Madrid"
      },
      "result": "2-1",
      "kickoff_time": "2023-10-01 4:30:00"
    },
    {
      "competitionName": "Ligue 1",
      "selectedCompetitionId":"4",
      "matchday": 1,
      "teams": {
        "home": "Manchester United- 3",
        "away": "Manchester City-3"
      },
      "result": "2-1",
      "kickoff_time": "2023-10-01 4:30:00"
    }
  ]
  // Fetch a list of competitions from the API
  // getCompetitions(): Observable<Competition[]> {
  //   return this.http.get<Competition[]>(`${this.apiUrl}/competitions`);
  // }
  // Fetch a list of competitions from the API
  getCompetitions() {
   return this.competetionData;
  }

//   import fakeBitcoinData from '../assets/fake-data/fake-bitcoin-data.json';
// public fetchBitcoinData(): Observable<BitcoinMarketData[]> {
//    // ... Commented out actual implementation
//    return of(fakeBitcoinData);

}
