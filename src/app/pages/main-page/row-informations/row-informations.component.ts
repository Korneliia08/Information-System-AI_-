import { Component } from '@angular/core';
import { RowInformationComponent } from './row-information/row-information.component';
import { TrPipe } from '../../../pipes/translate.pipe';

@Component({
    selector: 'app-row-informations',
    templateUrl: './row-informations.component.html',
    styleUrl: './row-informations.component.scss',
    imports: [RowInformationComponent, TrPipe]
})
export class RowInformationsComponent {

}
