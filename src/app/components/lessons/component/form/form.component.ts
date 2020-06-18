import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Lesson } from '../../../../models/lesson.model';
import { SubjectService } from '../../../../subject.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() subject: Lesson;
  @Input() appStatus: string;
  @Input() currentLessonIndex: number;
  @Output() changeStatus = new EventEmitter();

  profileForm = new FormGroup({
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),

    hour: new FormControl(0, [Validators.required]),
  });

  message: string;
  editMode: boolean;
  afterDelete: boolean;

  constructor(private data: SubjectService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    if (this.appStatus === 'view') {
      this.editMode = false;
      this.afterDelete = true;
    }
  }

  enableEdit() {
    this.changeStatus.emit('edit enabled');
    this.editMode = true;
    this.profileForm.patchValue({
      subject: this.subject.name,
      hour: this.subject.hour,
    });
  }

  onDelete() {
    this.data.onDelete(this.currentLessonIndex);
    this.afterDelete = false;
  }
  onSubmit() {
    if (
      this.profileForm.get('subject').valid &&
      this.profileForm.get('hour').valid
    ) {
      this.editMode = false;
      this.subject.name = this.profileForm.value.subject;
      this.subject.hour = this.profileForm.value.hour;
      this.data.onEdit(this.currentLessonIndex, {
        name: this.profileForm.value.subject,
        hour: this.profileForm.value.hour,
      });
    }
  }
}
