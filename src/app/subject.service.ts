import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {Lesson} from './models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private messageSource  = new BehaviorSubject<string>('default');

  currentMessage = this.messageSource.asObservable();

  lessons: Lesson[] = [
    {name: 'Mathematics', hour: 4},
    {name: 'English', hour: 10},
    {name: 'Informatics', hour: 1},
    {name: 'Fizaca', hour: 2},
    {name: 'Arta Plastica', hour: 7},
    {name: 'Educatia Fizica', hour: 5},
  ];

  totalHours: number;

  constructor() { }

  getHeroes(): Lesson[] {
    return this.lessons;
  }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  onDelete(index: number) {
    this.lessons.splice(index, 1);
  }

  onEdit(index: number, lesson: Lesson) {
    this.lessons[index] = lesson;
    console.log(this.lessons);
  }

  onAdd(lesson: Lesson) {
    this.lessons = this.lessons.concat(lesson);
    console.log('it got here', this.lessons);
  }
}
