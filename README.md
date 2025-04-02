# 101412670-lab-test2-comp3133

This is an Angular application built for COMP3133 Lab Test 2, designed to display SpaceX launch data using the SpaceX REST API. The app features a list of missions, filtering by launch year, and detailed views of individual missions, styled with Angular Material for a modern UI.

## Project Overview

- **Student ID**: 101412670 (replace with your actual student ID)
- **Course**: COMP3133 - Full Stack Development
- **Assignment**: Lab Test 2
- **Framework**: Angular 17.x (assumed based on standalone components)
- **API**: [SpaceX REST API](https://api.spacexdata.com/v3/launches)
- **UI Library**: Angular Material
- **Deployment**: Vercel (or your chosen hosting platform)

## Features

1. **Mission List Component**:
   - Displays a list of SpaceX launches with fields like mission name, flight number, launch year, details, rocket info, and links.
   - Styled with compact `mat-card` components, custom shadows, and elevation effects.

2. **Mission Filter Component**:
   - Allows filtering missions by launch year using a text input and buttons.

3. **Mission Details Component**:
   - Shows detailed information about a selected mission, accessed via routing with a `flight_number` parameter.
   - Fetches data from the SpaceX API for a specific mission.

4. **Service**:
   - `SpacexService` fetches data from the SpaceX API and provides it to components via an observable.

5. **Data Structure**:
   - Uses a `Launch` interface to define the structure of SpaceX launch data.

6. **Angular Material Design**:
   - Custom-styled `mat-card`, `mat-button`, and other components for a polished, compact UI.

7. **Routing**:
   - Navigates between the mission list (`/`) and mission details (`/mission/:flight_number`).

## Prerequisites

- **Node.js**: v18.x or later (download from [nodejs.org](https://nodejs.org/))
- **Angular CLI**: Install globally with `npm install -g @angular/cli`
- **Git**: For version control

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/cozimo-davinci/101412670-lab-test2-comp3133.git
   cd 101412670-lab-test2-comp3133

2. **Install Dependencies**:
    ```bash
    npm install

3. **Run the Application Locally:
    ```bash
    ng serve

## How to Use

1. **View All Missions**: Navigate to the root URL (/) to see the list of SpaceX launches.
2. **Filter by Year**: Enter a year (e.g., 2020) in the filter input and click "Filter" to narrow down the list.
3. **View Mission Details**: Click the "Details" button on any mission card to see its full details.

## License

    This project is for educational purposes and not licences for commercial use.
