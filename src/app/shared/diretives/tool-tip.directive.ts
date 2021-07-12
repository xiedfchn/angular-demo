import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements OnInit {
  toolTipEl = document.createElement('div');

  @Input()
  set toolTip(value: string) {
    this.toolTipEl.textContent = value;
  }
  

  @HostListener('mouseenter')
  show() {
    this.toolTipEl.style.display = "block";
  }

  @HostListener('mouseleave') 
  hide() {
    this.toolTipEl.style.display = "none";
  }

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.toolTipEl.classList.add('tool-tip');
    this.toolTipEl.style.display = "none";
    this.element.nativeElement.classList.add('tool-tip-container');
    this.element.nativeElement.appendChild(this.toolTipEl);
    
  }


}
