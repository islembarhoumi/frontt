import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.css']
})
export class AlerteComponent implements OnInit {

  @Input() type: string = ''; // Initialisation lors de la déclaration
  @Output() onClose = new EventEmitter<any>();
  constructor() {
    // Vous pouvez initialiser la propriété ici si nécessaire
    // this.type = 'default';
  }
  ngOnInit(): void {
  }
  Close(){
    this.onClose.emit();
  }
}