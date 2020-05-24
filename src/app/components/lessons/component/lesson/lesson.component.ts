import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Lesson} from '../../../../models/lesson.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
  @Input() subject: Lesson;

  onSave() {
    console.log(this.subject.name);
  }
}
