import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'animation-sustainability-option',
  templateUrl: './sustainability-option.component.html',
  styleUrls: ['./sustainability-option.component.scss']
})
export class SustainabilityOptionComponent implements OnInit, AfterViewInit {

  @Input() iconLocation : string|undefined
  @Input() buttonIconLocation : string|undefined
  @Input() optionLocation: string|undefined
  @Input() color: string|undefined
  @Input() header: string|undefined
  @Input() paragraph: string|undefined

  @ViewChild('button') button : ElementRef|undefined;
  @ViewChild('bgButton') bgButton : ElementRef|undefined

  over:boolean;

  constructor(private _renderer: Renderer2, private _elm: ElementRef) { 
    this.over=false;
  }


  

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this._renderer.setStyle(this.button?.nativeElement, 'backgroud-color', this.color)
    this._renderer.addClass(this.bgButton?.nativeElement,'c-animation-button__bg'+this.optionLocation)
  }

  

  expandButton(){
    
    if(!this.over){
      this._renderer.setStyle(this.button?.nativeElement,'background-color','#FFFFFF')
      this._renderer.addClass(this.bgButton?.nativeElement,'c-animation-button__bg'+this.optionLocation+'--expand'); 
      this.over=!this.over
    }
    
  }

  shrinkButton(){
    if(this.over){
        this._renderer.setStyle(this.button?.nativeElement,'background-color',this.color)
        this._renderer.removeClass(this.bgButton?.nativeElement,'c-animation-button__bg'+this.optionLocation+'--expand');
        this.over=!this.over
    }
  }

}
