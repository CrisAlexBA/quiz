import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cursos: string[] = ['Curso 1', 'Curso 2', 'Curso 3']; // Ejemplo de datos de cursos
}
