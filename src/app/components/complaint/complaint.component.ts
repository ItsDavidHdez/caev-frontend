import { Component } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css'],
})
export class ComplaintComponent {
  constructor(public complaintService: ComplaintService) {}

  ngOnInit() {
    this.complaintService.getComplaint().subscribe(
      (res) => {
        this.complaintService.complaints = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
