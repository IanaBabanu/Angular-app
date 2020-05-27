import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Lesson } from './models/lesson.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  // private messageSource = new BehaviorSubject<string>("default");

  // currentMessage = this.messageSource.asObservable();

  lessons: Lesson[] = [
    { name: 'Mathematics', hour: 4 },
    { name: 'English', hour: 10 },
    { name: 'Informatics', hour: 1 },
  ];

  constructor() {}

  getLessons(): Lesson[] {
    return this.lessons;
  }

  // changeMessage(message: string) {
  //   this.messageSource.next(message);
  // }

  onDelete(index: number) {
    this.lessons.splice(index, 1);
  }

  onEdit(index: number, lesson: Lesson) {
    this.lessons[index] = lesson;
  }

  onAdd(lesson: Lesson) {
    this.lessons.push(lesson);
  }
}
