import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Ijob } from 'src/app/shared/models/job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {
  job : Ijob = {
    id : null!,
    jobTitle :'',
  };

constructor(public jobServiece:JobService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.jobServiece.job = this.job as unknown as Ijob[];
    this.jobServiece.PostJob();
  }

}
