import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { REGISTER_AS_BUYER, REGISTER_AS_MARKET } from './modes.consts';

@Component({
  selector: 'app-select-register-mode',
  templateUrl: './select-register-mode.component.html',
  styleUrls: ['./select-register-mode.component.scss']
})
export class SelectRegisterModeComponent implements OnInit {

  @Input()
  public selectedMode: string;

  public availableRegisterModes: Array<{name: string, selected: boolean}> = [
    {name: REGISTER_AS_MARKET, selected: true},
    {name: REGISTER_AS_BUYER, selected: false},
  ];

  @Output()
  public modeChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.selectedMode !== REGISTER_AS_MARKET && this.selectedMode !== REGISTER_AS_BUYER){
      this.selectedMode = REGISTER_AS_BUYER;
    }
  }

  public setSelectedMode(mode: {name: string, selected: boolean}) {
    this.selectedMode = mode.name;
    this.modeChange.emit(this.selectedMode);
  }

}
