import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShdow]',
  host: {
    '(mouseenter)': 'onmouseenter()',
    '(mouseleave)': 'onmouseleave()',
  },
})
export class shadowDirective {
  constructor(private element: ElementRef) {}
  onmouseenter() {
    const element = this.element.nativeElement.parentElement;

    element.classList.add('shadow', 'shadow-lg');
  }
  onmouseleave() {
    const element = this.element.nativeElement.parentElement;

    element.classList.remove('shadow', 'shadow-lg');
  }
}
