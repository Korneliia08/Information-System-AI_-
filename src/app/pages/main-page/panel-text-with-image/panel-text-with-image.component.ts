import { Component } from '@angular/core';
import { SanitizeHtmlPipe } from '../../../pipes/sanitizer.pipe';
import { TrPipe } from '../../../pipes/translate.pipe';

@Component({
    selector: 'app-panel-text-with-image',
    templateUrl: './panel-text-with-image.component.html',
    styleUrl: './panel-text-with-image.component.scss',
    imports: [SanitizeHtmlPipe, TrPipe]
})
export class PanelTextWithImageComponent {

}
