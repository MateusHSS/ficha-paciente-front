import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent {
  @Input() dataSource: Observable<object[]> = of([]);
  @Input() colunas: string[] = [];
  @Input() addIcons: boolean = false;
  @Input() exibirEditar: boolean = false;
  @Input() exibirExcluir: boolean = false;
  @Input() totalRegistros: number = 0;

  @Output() edita: EventEmitter<any> = new EventEmitter();
  @Output() exclui: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  onClickEdit(item: any): void {
    this.edita.emit(item);
  }

  onClickDelete(item: any) {
    this.exclui.emit(item);
  }

  ehIcons(coluna: string) {
    return coluna == 'icons';
  }
}
