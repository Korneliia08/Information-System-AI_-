import { Component } from '@angular/core';
import {TranslateService} from '../../../pipes/translate.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-choose-language-modal',
  standalone: false,

  templateUrl: './choose-language-modal.component.html',
  styleUrl: './choose-language-modal.component.scss'
})
export class ChooseLanguageModalComponent {
  constructor(private translation_:TranslateService,public dialogRef: MatDialogRef<ChooseLanguageModalComponent>) {
  }
  selectLanguage(language: string) {
    this.translation_.getLanguageFile(language)
    this.dialogRef.close('success')
  }
}
