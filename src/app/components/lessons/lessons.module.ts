import { NgModule } from '@angular/core';
import { LessonsComponent } from './container/lessons.component';
import { LessonsDetailsComponent } from './component/details/lessons-details.component';
import { LessonComponent } from './component/lesson/lesson.component';
import { FormComponent } from './component/form/form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LessonsComponent,
    LessonsDetailsComponent,
    LessonComponent,
    FormComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [LessonsComponent],
})
export class LessonsModule {}
