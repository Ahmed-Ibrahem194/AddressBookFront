import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ijob } from '../shared/models/job';
import { JobService } from './job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  job? : Ijob;
  constructor(public jobService : JobService , private router: Router) { }

  ngOnInit(): void {
    //Get All Jobs
    this.jobService.getJobs();
  };

// open the modal dialog
  openEditDialog(job: Ijob) {
    this.job = job;
  }
  
goToJobItemComponent() {
  this.router.navigate(['/job-item']);
};

//update Job
updateJob(){
  this.jobService.PutJob()
};

//Delete Job
deleteJob(){
  this.jobService.deleteJob();
};
}

