import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Lesson} from '../../../../models/lesson.model';
import { SubjectService } from '../../../../subject.service';

@Component({
  selector: 'app-lessons-details',
  templateUrl: './lessons-details.component.html',
  styleUrls: ['./lessons-details.component.scss']
})

export class LessonsDetailsComponent implements OnInit {

  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();

   selectedLesson: Lesson;
   message: string;
   heroes: Lesson[];

  constructor(private data: SubjectService) {
    this.selectedLesson = {name: 'Mathematics', hour: 4};
  }

  ngOnInit() {
    this.heroes = this.data.getHeroes();
  }

  onDeleteLesson(index: number) {
    this.delete.emit(index);
  }
  onEditLesson(lesson: Lesson): void {
    this.selectedLesson = lesson;
    console.log(lesson);

  }

  onSubmit(lessonForm: NgForm) {
    const formValue = lessonForm.value;
    this.data.onAdd(formValue);
    console.log(formValue);
  }

}
