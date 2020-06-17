import { Component, OnInit } from '@angular/core';
import { PlatoService } from 'src/app/services/plato.service';
import { Router } from '@angular/router';
import { Plato } from 'src/app/model/plato';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  platos: Plato[]

  constructor(private platoService: PlatoService, private router: Router) { }

  ngOnInit() {
    this.getAll()

  }

  getAll() {
    this.platoService.getAll().subscribe(data => {
      console.log("getAll de tabla")
      console.log(data)
      this.platos = data;

    },

      err => {
        console.log('error de getAll en tabla');
        console.log(err)
      });
  }

  update(id: number) {
    this.router.navigate(['/plato/' + id]);
  }

  delete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.platoService.delete(id).subscribe(res => {
        //lo ideal seria paginación, asi cuando se recarga no trae tanto
        window.location.reload();
      },
        err => console.log(err));
    }
  }
}
