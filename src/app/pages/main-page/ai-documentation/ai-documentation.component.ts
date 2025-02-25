import { Component } from '@angular/core';
import { TrPipe } from '../../../pipes/translate.pipe';

@Component({
    selector: 'app-ai-documentation',
    templateUrl: './ai-documentation.component.html',
    styleUrl: './ai-documentation.component.scss',
    imports: [TrPipe]
})
export class AiDocumentationComponent {

}
