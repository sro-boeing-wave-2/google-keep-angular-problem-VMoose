import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatChipsModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import 'hammerjs';
import {HttpClientModule} from '@angular/common/http';
import { NoteService } from '../services/note.service';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [NoteService],
  bootstrap: [DialogComponent]
})
export class AppModule { }
