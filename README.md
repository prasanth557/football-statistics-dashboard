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

![Architecture](https://github.com/prasanth557/football-statistics-dashboard/blob/main/readme-img/dataflow-architecture.png)

- [App Initialization](https://github.com/sanginchun/football-dashboard/blob/master/index.html): entry point

- [Component Initialization](https://github.com/sanginchun/football-dashboard/blob/master/src/App.js): controls entire application

- [Header and Footer Display](https://github.com/sanginchun/football-dashboard/blob/master/src/model.js): parse and format data

- [Routing Initialization](https://github.com/sanginchun/football-dashboard/blob/master/src/api/api.js): makes api call and takes control of cache storage

- [components](https://github.com/sanginchun/football-dashboard/tree/master/src/components)

  - [Competitions Page (Initial View)](https://github.com/sanginchun/football-dashboard/tree/master/src/components/sidebar)

   - [User Interaction](https://github.com/sanginchun/football-dashboard/tree/master/src/components/sidebar/logo)
    - [Data Request](https://github.com/sanginchun/football-dashboard/tree/master/src/components/sidebar/user-nav): user profile, buttons (Sign in, Sign out, Delete account)
    - [Competition Data Retrieval](https://github.com/sanginchun/football-dashboard/tree/master/src/components/sidebar/main-nav): main nav of the app
    - [Data Presentation](https://github.com/sanginchun/football-dashboard/tree/master/src/components/sidebar/sidebar-btn): activated on mobile devices

  - [User Navigation](https://github.com/sanginchun/football-dashboard/tree/master/src/components/main-container): main display area

    - [Matches Page](https://github.com/sanginchun/football-dashboard/tree/master/src/components/main-container/main-header)
    - [User Interaction (Matches Page)](https://github.com/sanginchun/football-dashboard/tree/master/src/components/main-container/controller): activated on custom tab, controls edit functions
    - [Data Request (Matches Page):](https://github.com/sanginchun/football-dashboard/tree/master/src/components/main-container/main-content): main content area; includes content(card) components and utility components such as buttons, datepicker, checkbox

  - [Match Data Retrieval](https://github.com/sanginchun/football-dashboard/tree/master/src/components/Spinner)

- [Data Presentation (Matches Page)](https://github.com/sanginchun/football-dashboard/tree/master/src/others/): config, helper, firebase config
- [User Session End](https://github.com/sanginchun/football-dashboard/tree/master/src/others/): config, helper, firebase config

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
