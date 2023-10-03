import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
// import { MatchListComponent } from './match-list/match-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CompetitionService } from './competition.service';
import { MatchService } from './match.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule, // Add this line
    AppRoutingModule, BrowserAnimationsModule, // Import your routing module here
    MatTableModule,
    FormsModule,
    MatPaginatorModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [CompetitionService, MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
