import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css'],
})
export class CreateComplaintComponent {
  contactForm!: FormGroup;
  constructor(
    private complaintService: ComplaintService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSave() {
    this.complaintService.postComplaint(this.contactForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    console.log('save?', this.contactForm.value);
  }

  initForm() {
    return this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      domicile: ['', [Validators.required]],
      colony: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
          Validators.maxLength(10),
        ],
      ],
      sector: ['', []],
      zone: ['', []],
      comment: ['', []],
      status: ['To Do', []],
    });
  }
}
