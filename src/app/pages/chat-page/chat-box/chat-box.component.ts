import {Component, Input, SimpleChanges} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-chat-box',
  standalone: false,
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent {
  @Input()
  conversation: any[] = [];

  @Input()
  isLoading: boolean = true;

  @Input()
  color: string | undefined = '#ffffff';

  detailsVisible: boolean[] = [];

  isDisplayLogo = true;
  isDisplayLogoHide = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    setTimeout(() => {
      this.isDisplayLogoHide = true;
      setTimeout(() => {
        this.isDisplayLogo = false;
      }, 1000);
    }, 4000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.detailsVisible = [];
    if (this.isLoading) {
      this.isDisplayLogoHide = true;
      this.isDisplayLogo = false;
    }
    this.detailsVisible.push(false);
  }

  toggleDetails(index: number): void {
    this.detailsVisible[index] = !this.detailsVisible[index];
  }

  openFileDetails(details: string): void {}

  onDownload(element: any) {}

  hexToRgba(hex: string | undefined, opacity: number): string {
    if (hex) {
      const r = parseInt(hex.slice(1, 3), 16);

      const g = parseInt(hex.slice(3, 5), 16);

      const b = parseInt(hex.slice(5, 7), 16);

      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    return 'rgba(0, 0, 0, 0)';
  }
}
