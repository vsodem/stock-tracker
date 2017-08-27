import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ErrorDialog } from '../dialogs/index';
import { StockDataService } from '../../services/index';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.sass']
})
export class StockComponent implements OnInit {
  ticker: String;
  stock: Object;

  constructor(
    private stockDataService: StockDataService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  retrieveData() {
    if (this.ticker) {
      let tick = {
        ticker: this.ticker.toUpperCase()
      }

      this.stockDataService.getStockData(tick).subscribe(data => {
        if (data.success) {
          this.stock = data.stock;
        } else {
          this.openErrorDialog('We couldn\'t find a company with that ticker. Please try again with a different ticker.');
        }
      });
    } else {
      this.openErrorDialog('Please enter a stock ticker.');
    }
  }

  openErrorDialog(err) {
    console.log('hey')
    this.dialog.open(ErrorDialog, {
      data: err
    });
  }
}