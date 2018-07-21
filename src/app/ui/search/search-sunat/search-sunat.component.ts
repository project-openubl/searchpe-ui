import { DataService } from './../../../core/data/data.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../core/data/message.service';
import { PaginationConfig, TableConfig } from 'patternfly-ng';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SearchCriteria } from '../../../core/model/search-criteria.model';

@Component({
  selector: 'w4-search-sunat',
  templateUrl: './search-sunat.component.html',
  styleUrls: ['./search-sunat.component.scss']
})
export class SearchSunatComponent implements OnInit {

  form: FormGroup;

  allRows: any[] = [];
  columns: any[] = [
    { name: 'id', prop: 'id', hidden: true },
    { name: 'RUC', prop: 'ruc', sortable: true },
    { name: 'RAZON SOCIAL', prop: 'razonSocial', sortable: true },
    { name: 'ESTADO CONTR.', prop: 'estadoContribuyente', sortable: true },
    { name: 'COND. DOMIC.', prop: 'condicionDomicilio', sortable: true },
    { name: 'UBIGEO', prop: 'ubigeo', sortable: true },
    { name: 'TIPO VIA', prop: 'tipoVia', sortable: true },
    { name: 'NOMBRE VIA', prop: 'nombreVia', sortable: true },
    { name: 'COD. ZONA', prop: 'codigoZona', sortable: true },
    { name: 'TIPO ZONA', prop: 'tipoZona', sortable: true },
    { name: 'NUMERO', prop: 'numero', sortable: true }
  ];

  paginationConfig: PaginationConfig = {
    pageSize: 5,
    pageNumber: 1,
    pageSizeIncrements: [5, 50, 500]
  };

  tableConfig: TableConfig = {
    showCheckbox: false,
    paginationConfig: this.paginationConfig
  };

  constructor(private message: MessageService, private formBuilder: FormBuilder, private data: DataService) {
  }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.form = this.formBuilder.group({
      organizacion: [null, Validators.compose([Validators.required, Validators.maxLength(200)])]
    });
  }

  buscar() {
    if (!this.form.valid) {
      this.message.warning("Ingrese alguna descripcion para buscar");
    }
    const criteria: SearchCriteria = { ruc: this.form.value };
    this.data.search(criteria).subscribe(d => {
      this.allRows = d;
    });
  }

}