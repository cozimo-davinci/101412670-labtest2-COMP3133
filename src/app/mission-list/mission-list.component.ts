import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { Launch } from '../launch.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MissionFilterComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  launches: Launch[] = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.launches$.subscribe(data => {
      this.launches = data;
    });
  }
}