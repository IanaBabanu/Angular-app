import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Lesson} from '../../../../models/lesson.model';
import { SubjectService } from '../../../../subject.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
  @Input() subject: Lesson;

  profileForm = new FormGroup({
    subject: new FormControl('asdf', [
      Validators.required,
      Validators.minLength(4),
    ]),

    hour: new FormControl('sdsf',  [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  message: string;

  constructor(private data: SubjectService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.onEdit(2,     {name: 'Educatia Fizica', hour: 5},
    );
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  onSave() {
    console.log(this.profileForm.value);
    console.log(this.subject.name);
    console.log(this.subject.hour);


  }
}
