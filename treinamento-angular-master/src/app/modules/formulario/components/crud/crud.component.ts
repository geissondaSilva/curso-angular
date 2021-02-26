import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Api } from 'src/app/services/api';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudComponent implements OnInit {

  @Input() public form: FormGroup;

  @Input() public titulo: string;

  @Input() public api: Api<any>;

  constructor() { }

  ngOnInit() {
  }

  public criar() {

  }

}
