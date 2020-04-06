import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('inputServerName', {static: true}) serverInput: ElementRef;

  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(inputServerName: HTMLInputElement) {
    this.serverCreated.emit({serverName: this.serverInput.nativeElement.value, serverContent: this.newServerContent});
 }

onAddBlueprint() {
  // this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
 }

}
