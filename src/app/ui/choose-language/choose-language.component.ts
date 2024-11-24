import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChooseLanguageModalComponent} from './choose-language-modal/choose-language-modal.component';
import {TranslateService} from '../../pipes/translate.service';

@Component({
  selector: 'app-choose-language',
  standalone: false,

  templateUrl: './choose-language.component.html',
  styleUrl: './choose-language.component.scss'
})
export class ChooseLanguageComponent {
  @Input() width : string ='';
  constructor(public dialog: MatDialog,public translation_:TranslateService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ChooseLanguageModalComponent);


  }
}
