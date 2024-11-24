import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-accessibility',
  standalone: false,

  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.scss'
})
export class AccessibilityComponent implements  OnInit{
  open = false;
  isUnderlined = false;
  fontSize = 16;
  lineHeight = 1;
  grayscale = false;
  invertColors = false;
  lowSaturation = false;
  highSaturation = false;

  ngOnInit() {
    // @ts-ignore
    console.log(document.querySelector("#accessibility-icon"));
    // @ts-ignore
    document.querySelector("#accessibility-icon").addEventListener("click",()=>{
      this.open = !this.open
      console.log(this.open);
    })
  }

  toggleUnderline(): void {
    this.isUnderlined = !this.isUnderlined;
    this.underlineLinks();
  }

  underlineLinks(): void {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.style.textDecoration = this.isUnderlined ? 'underline' : 'none';
    });
  }

  increaseFontSize(): void {
    if (this.fontSize < 30) {
      this.fontSize = Math.min(this.fontSize + 2, 30);
      document.documentElement.style.fontSize = `${this.fontSize}px`;
    }
  }

  decreaseFontSize(): void {
    if (this.fontSize > 12) {
      this.fontSize = Math.max(this.fontSize - 2, 12);
      document.documentElement.style.fontSize = `${this.fontSize}px`;
    }
  }

  toggleGrayscale(): void {
    this.grayscale = !this.grayscale;
    this.updateFilter();
  }

  toggleInvertColors(): void {
    this.invertColors = !this.invertColors;
    this.updateFilter();
  }

  toggleLowSaturation(): void {
    this.lowSaturation = !this.lowSaturation;
    this.updateFilter();
  }

  toggleHighSaturation(): void {
    this.highSaturation = !this.highSaturation;
    this.updateFilter();
  }

  updateFilter(): void {
    let filter = '';
    if (this.grayscale) filter += 'grayscale(100%) ';
    if (this.invertColors) filter += 'invert(100%) ';
    if (this.lowSaturation) filter += 'saturate(20%) ';
    if (this.highSaturation) filter += 'saturate(200%) ';
    document.documentElement.style.filter = filter.trim();
  }

  increaseLineHeight(): void {
    this.lineHeight = Math.min(this.lineHeight + 0.1, 2);
    document.documentElement.style.lineHeight = this.lineHeight.toString();
  }

  decreaseLineHeight(): void {
    this.lineHeight = Math.max(this.lineHeight - 0.1, 0.5);
    document.documentElement.style.lineHeight = this.lineHeight.toString();
  }

  resetOptions(): void {
    this.isUnderlined = false;
    this.fontSize = 16;
    this.lineHeight = 1;
    this.grayscale = false;
    this.invertColors = false;
    this.lowSaturation = false;
    this.highSaturation = false;

    document.querySelectorAll('*').forEach(element => {
      (element as HTMLElement).style.textDecoration = 'none';
    });

    document.documentElement.style.filter = 'none';
    document.documentElement.style.fontSize = '16px';
    document.documentElement.style.lineHeight = '1';
  }

  toggleAccessibilityMenu(): void {
    this.open = !this.open;
  }
}
