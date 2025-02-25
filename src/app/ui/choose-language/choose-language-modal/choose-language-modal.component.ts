import { Component } from '@angular/core';
import {TranslateService} from '../../../pipes/translate.service';
import { MatDialog, MatDialogRef, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';
import { TrPipe } from '../../../pipes/translate.pipe';

@Component({
    selector: 'app-choose-language-modal',
    templateUrl: './choose-language-modal.component.html',
    styleUrl: './choose-language-modal.component.scss',
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatButton, TrPipe]
})
export class ChooseLanguageModalComponent {
  constructor(private translation_:TranslateService,public dialogRef: MatDialogRef<ChooseLanguageModalComponent>) {
  }
  selectLanguage(language: string) {
    this.translation_.getLanguageFile(language)
    this.dialogRef.close('success')
  }
}
