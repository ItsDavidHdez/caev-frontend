import { Component } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css'],
})
export class ComplaintComponent {
  constructor(private complaintService: ComplaintService) {}

  complaint = [];

  ngOnInit() {
    this.complaintService.getComplaint().subscribe(
      (res) => {
        console.log(res);
        this.complaint = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
