import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  localData = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    localStorage.setItem('data', this.localData);
    alert('Dato guardado')
    this.localData = '';
  }

}
