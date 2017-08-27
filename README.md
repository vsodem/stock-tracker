# Stock Tracker
A project that fetches real-time<sup style="font-size: 10px">1</sup> intraday financial exchange data using the Google Finance API.

Features in Progress
--------------------
Feature | Description
:--- | :---
*Show Historical Data* | Display the security's historical data
*Graphical Interface* | Insert a dynamic, candlestick chart to view the high, low, and open price of a security for the past 15 days as well as volume traded
*Short-term Predictions* | Using technical analysis, predict short-term gains & losses
*Long-term Predictions* | Perform fundamental analysis to determine the long-term value of a security

### Getting Started
First, run ```npm install``` in the base directory **and** the ```tracker-src``` directory.

To build out the project, ```cd``` into the ```tracker-src``` directory and run ```ng build```. Then run ```npm start``` in the base directory to start the server on *127.0.0.1:8080*.

To setup a development server, ```cd``` into ```tracker-src``` and run ```ng serve```, which will start the Angular development server on *localhost:4200*. Then, run ```nodemon``` in the base directory.

<sup style="font-size: 10px">1</sup> Real-time as outlined by Google Finance. NYSE and NASDAQ volume information is delayed by 15 minutes. See [Google's disclaimer](https://www.google.com/googlefinance/disclaimer/) for more information.

<p style="font-size: 11px"><b>Disclaimer:</b> This is in no way nor will it ever be a surefire way to track the markets. Use your own analysis before conducting any trades.</p>