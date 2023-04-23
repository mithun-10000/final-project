import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elRef: ElementRef) { 
    elRef.nativeElement.style.backgroundColor = "blue";
    elRef.nativeElement.style.color = "red";
    elRef.nativeElement.style.fontSize = "20px";
    elRef.nativeElement.style.fontStyle = "cursive";
  }

}
