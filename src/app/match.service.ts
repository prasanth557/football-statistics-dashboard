import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { xml2json } from '../assets/Js/xml2json.js';

declare function xml2json(dom): any;
@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private apiUrlXml = '../assets/sampledata.xml';
  competetionData: any;
  constructor(private http: HttpClient) {
    this.getXmlString();
  }

  //converts xml data to json data
  getXmlString() {
    var parsedString = '';
    this.http
      .get(this.apiUrlXml, {
        responseType: 'text',
        headers: { 'Content-Type': 'application/xml' },
      })
      .subscribe((response) => {
        let dom = this.parseXml(response);
        let json1 = xml2json(dom);

        let inputString = json1;

        // Use the replace method to remove "undefined"
        let jsonString = inputString.replace('undefined', '');

        // Parse the JSON data
        let jsonData = JSON.parse(jsonString);

        this.competetionData = jsonData.matches.match;
      });

    return parsedString  = this.competetionData;
  }

  //filters data from all competetions based on selectedCompetitionId and matchday
  getMatches(competitionId: string, matchday: any) {
    var matchData = this.competetionData.filter(
      (x: { selectedCompetitionId: string; matchday: any }) =>
        x.selectedCompetitionId == competitionId && x.matchday == matchday
    );
    return matchData;
  }

  parseXml(xml: any) {
    var dom: any;
    if (window.DOMParser) {
      try {
        dom = new DOMParser().parseFromString(xml, 'text/xml');
      } catch (e) {
        dom = null;
      }
    }
    return dom;
  }
}
