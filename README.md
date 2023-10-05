# Football Matches App

This is an Angular application that displays football matches information from an XML data source. It allows users to select a competition and a matchday to view the list of matches, sorted by kickoff time.
## Table of Contents

- [Requirements](https://github.com/prasanth557/football-statistics-dashboard#Requirements)
- [Technologies Used](https://github.com/prasanth557/football-statistics-dashboard#technologies-used)
- [Features](https://github.com/prasanth557/football-statistics-dashboard#features)
- [Project Structure](https://github.com/prasanth557/football-statistics-dashboard#project-structure)
- [Architecture](https://github.com/prasanth557/football-statistics-dashboard#architecture)
- [Installation](https://github.com/prasanth557/football-statistics-dashboard#installation)
- [Development Server](https://github.com/prasanth557/football-statistics-dashboard#development-server)

## Requirements

### Technologies Used
- Angular (v16+)
- Angular Material (or PrimeNG)
- Angular Forms

### Features
1. Access and display football match data from an XML source.
2. Select a competition and matchday via a drop-down menu.
3. Display a list of matches for the selected competition and matchday, sorted by kickoff time.
4. Display match details including:
   - The teams involved
   - The game result
   - Kick-off time

## Project Structure

The project structure includes the following components:

- `app`: The root module and components.
- `competition-list`: The component responsible for selecting competitions and matchdays.
- `match-list`: The component that displays the list of matches.
- `services`: Contains services for fetching and managing data.
- `assets`: You can place your XML data file or other static assets here.

## Architecture

![Architecture](https://github.com/prasanth557/football-statistics-dashboard/blob/main/readme-img/dataflow_architecture.png)

- [App Initialization(index.html)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/index.html): When the application is initialized, the Angular framework loads the root module (usually AppModule).

- [Component Initialization (app.module.ts)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/app.module.ts): The root component (usually AppComponent) is initialized, and it typically contains the app's layout structure.
  The AppComponent includes the <router-outlet></router-outlet> tag, which acts as a placeholder for rendering other components based on routing.


- [Header and Footer Display](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/header): The HeaderComponent and FooterComponent are initialized and displayed by the AppComponent

- [Routing Initialization](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/app-routing.module.ts): Angular's router module is initialized, and the routes defined in the app-routing module are configured.

- [components](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app)
   
  - [Competitions Page (Initial View)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/competetion-list)
      When the app starts, the default route (/competitions) is usually loaded.
      The CompetitionListComponent is initialized and displayed in the <router-outlet></router-outlet>.

   - [User Interaction](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/competetion-list)
      •	The user interacts with the CompetitionListComponent by selecting a competition and matchday.
      •	The selected data triggers an event or function, such as onSearch().

    - [Data Request(component.service)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/component.service.ts): The onSearch() function in CompetitionListComponent sends a request to the CompetitionService to fetch a list of competitions.
    - [Competition Data Retrieval](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/competetion-list): The CompetitionService fetches competition data from the XML source (or API) and returns it as an Observable.
    - [Data Presentation](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/competetion-list):  The fetched competition data is displayed in the CompetitionListComponent

  - [User Navigation](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app): The user may choose to navigate to the "Matches" page (or another route) by interacting with the UI.

    - [Matches Page](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list)
       •	If the user navigates to the "Matches" page, the route /matches/:competitionId/:matchday is activated.
       •	The MatchListComponent is initialized and displayed in the <router-outlet></router-outlet>.

    - [User Interaction (Matches Page)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list): The user can further interact with the MatchListComponent by viewing matches and their details.
    - [Data Request (Matches Page):](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list): The MatchListComponent can send requests to the MatchService to fetch match data based on competition and matchday.

  - [Match Data Retrieval](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list): The MatchService fetches match data from the XML source (or API) and returns it as an Observable

- [Data Presentation (Matches Page)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list): The fetched match data is displayed in the MatchListComponent, sorted by kickoff time.
- [User Session End](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list):
   •	The user session continues as they interact with the application.
   •	The user can navigate between components, view matches, and perform other actions.
   •	Eventually, the user session ends when they close the application or navigate away.


## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the project folder:

   cd football-statistics-dashboard

3. Install dependencies:
   
   npm install
4. Start the development server:

   ng serve

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
