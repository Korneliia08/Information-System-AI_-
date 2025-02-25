import { Component } from '@angular/core';
import { ChooseLanguageComponent } from '../../../ui/choose-language/choose-language.component';
import { MatIcon } from '@angular/material/icon';
import { NgIcon } from '@ng-icons/core';
import { TrPipe } from '../../../pipes/translate.pipe';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [ChooseLanguageComponent, MatIcon, NgIcon, TrPipe]
})
export class FooterComponent {

}
