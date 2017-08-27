import { Component, OnInit } from '@angular/core';

import { StockDataService } from '../../services/index';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.sass']
})
export class StockComponent implements OnInit {
  ticker: String;
  stock: Object = {
    t: 'BABA',
    p: 143.80
  };

  constructor(
    private stockDataService: StockDataService
  ) { }

  ngOnInit() {
  }

  retrieveData() {
    if (this.ticker) {
      console.log(this.ticker)

      let tick = {
        ticker: this.ticker.toUpperCase()
      }

      this.stockDataService.getStockData(tick).subscribe(data => {
        if (data.success) {
          this.stock = data.stock;
        }
      });
    }
  }
}
