import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TrPipe } from '../../../pipes/translate.pipe';

@Component({
    selector: 'app-whe-are-we',
    templateUrl: './whe-are-we.component.html',
    styleUrl: './whe-are-we.component.scss',
    imports: [MatIcon, TrPipe]
})
export class WheAreWeComponent {

}
