import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public dialogForm: FormGroup;
  public title = "Note";
  public isDisabled: boolean = true;
  public noteId = -1;
  public Notes = [];
  constructor(private formBuilder: FormBuilder, private _noteservices: NoteService) {
    this.dialogForm = this.formBuilder.group({
      title: new FormControl(''),
      text: new FormControl(''),
      pinned: new FormControl(false),
    });
  }

  Post(){
    this.Notes.push(this.dialogForm.value);
  }
  edit(note){
    this.noteId = this.Notes.indexOf(note);
    this.isDisabled = false ;
  }

  remove(note){
    var index = this.Notes.indexOf(note);;
    this.Notes.splice(index, 1);
  }

  Save(){
    this.isDisabled = true;
  }

  ngOnInit() {
    this._noteservices.getNotes()
      .subscribe(data => this.Notes= data);
  }

}
