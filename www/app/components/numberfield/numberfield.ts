import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'numberfield',
  template: '<input style="flex-grow:1;" [placeholder]="placeholder??n" type="number" step={{step}} min={{lowerlimit}} max={{upperlimit}} (change)="handleInput($event)" value={{default}}/>',
  styleUrls: ['../../common.css'],
})
export class NumberField {
  public n = "no limit";
  public value: number | null = undefined;
  
  @Input() upperlimit: number | null;
  @Input() lowerlimit: number | null;
  @Input() default: number | null;
  @Input() step: number;
  @Input() placeholder: string | null;
  @Input() nullallowed: boolean;
  
  @Output() onChangeNumber = new EventEmitter<number | null>();

  public handleInput(ev: Event) {
    if(this.value === undefined) {
      this.value = this.default === null ? NaN : this.default
    }
    let inp = ev.target as HTMLInputElement
    if(inp.validity.valid && (this.nullallowed || !isNaN(this.value))) {
      this.value = inp.valueAsNumber;
      this.onChangeNumber.emit(isNaN(this.value) ? null : this.value)
    } else {
      if(inp.validity.rangeOverflow) {
        //set to max if set too high
        inp.valueAsNumber = this.upperlimit
        this.value = this.upperlimit;
      }
      else if(inp.validity.rangeUnderflow) {
        //set to min/0 if negative
        inp.valueAsNumber = this.lowerlimit
        this.value = this.lowerlimit
      }
      else if(inp.validity.stepMismatch) {
        //round to nearest step - the toFixed fixes floating-point shenanigans
        inp.value = (Math.round(inp.valueAsNumber / this.step) * this.step).toFixed(Math.ceil(-Math.log10(this.step)))
        this.value = inp.valueAsNumber
      } else {
        //just set it back otherwise
        inp.valueAsNumber = this.value
      }
    }
  }
}