import { Component } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mission-filter',
  imports: [FormsModule],
  templateUrl: './mission-filter.component.html',
  styleUrl: './mission-filter.component.css'
})
export class MissionFilterComponent {

  year: string = '';

  constructor(private spacexService: SpacexService) {

  }

  filterLaunches() {
    this.spacexService.fetchLaunches(this.year)
  }

  clearFilter() {
    this.year = '';
    this.spacexService.fetchLaunches()
  }
}
