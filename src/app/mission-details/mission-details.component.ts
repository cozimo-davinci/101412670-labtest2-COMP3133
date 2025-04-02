import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../spacex.service';
import { Launch } from '../launch.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent implements OnInit {
  mission: Launch | undefined;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService
  ) { }


  ngOnInit(): void {
    // Get the flight number from the route parameters
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');
    if (flightNumber) {
      this.spacexService.getMission(flightNumber).subscribe({
        next: (data) => {
          this.mission = data;
        },
        error: (err) => {
          console.error('Error fetching mission details:', err);
          this.mission = undefined;
        }
      })
    }
  }

}
