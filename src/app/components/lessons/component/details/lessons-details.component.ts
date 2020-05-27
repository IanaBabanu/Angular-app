import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lesson } from '../../../../models/lesson.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubjectService } from '../../../../subject.service';

@Component({
  selector: 'app-lessons-details',
  templateUrl: './lessons-details.component.html',
  styleUrls: ['./lessons-details.component.scss', '../form/form.component.css'],
})
export class LessonsDetailsComponent implements OnInit {
  addForm = new FormGroup({
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),

    hour: new FormControl('', [Validators.required]),
  });
  selectedLesson: Lesson;
  appStatus: string;
  message: string;
  currentLessonIndex: number;
  lessons: Lesson[];

  constructor(private data: SubjectService) {
    this.selectedLesson = { name: 'Mathematics', hour: 4 };
  }

  ngOnInit() {
    this.lessons = this.data.getLessons();
  }

  onChangeStatus() {
    this.appStatus = 'edit';
  }

  onViewLesson(index: number, lesson: Lesson): void {
    this.selectedLesson = lesson;
    this.currentLessonIndex = index;
    this.appStatus = 'view';
  }
  onAdd() {
    if (this.addForm.get('subject').valid && this.addForm.get('hour').valid) {
      this.data.onAdd({
        name: this.addForm.value.subject,
        hour: this.addForm.value.hour,
      });
    }
  }
}
