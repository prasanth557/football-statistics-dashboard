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

- [App Initialization(index.html)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/index.html): entry point

- [Component Initialization (app.module.ts)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app.module.ts): Initialises components in application

- [Header and Footer Display](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/header): Displays header component

- [Routing Initialization](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/app-routing.module.ts): makes navigation from one component to another through routing

- [components](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app)

  - [Competitions Page (Initial View)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/competetion-list)

   - [User Interaction](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/competetion-list)
    - [Data Request(component.service)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/component.service.ts): Fetches data from service and displays in UI dropdowns
    - [Competition Data Retrieval](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/competetion-list): main page data of the app
    - [Data Presentation](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/competetion-list): Data will be appeared in drop downs

  - [User Navigation](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app): User clicks on serch button navigates to matches component

    - [Matches Page](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list)
    - [User Interaction (Matches Page)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list): activated on new tab, controls sort functions
    - [Data Request (Matches Page):](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list): main content area; includes Match-list component

  - [Match Data Retrieval](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list)

- [Data Presentation (Matches Page)](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list): data retrieval and display in table 
- [User Session End](https://github.com/prasanth557/football-statistics-dashboard/blob/main/src/app/match-list): config, helper, Git config

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
