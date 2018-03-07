import * as config from '../config.json';
import chalk from 'chalk';

import { createServer } from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router';

import path from 'path';
import express from 'express';

import { ServerStyleSheet } from 'styled-components'; 

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './public/reducers';

import App from './public/App';

let message = {
  count: 0,
  message: '',
  price: 0,
  author: 0,
  date: 0,
  step: 0
};

const store = createStore(allReducers);

var http = require("http");
var socketio = require("socket.io");

var app = express(); // make an Express app
var server = http.createServer(app); // HTTP server based on Express app
var io = socketio.listen(server); // Socket now listening to HTTP server

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {

  io.on('connection', (socket) =>{

    console.log('Websocket: connected.');
    
    io.sockets.emit('count',   message.count)    
    io.sockets.emit('message', message.message)
    io.sockets.emit('price',   message.price)
    io.sockets.emit('author',  message.author)
    io.sockets.emit('date',    message.date)
    io.sockets.emit('step',    message.step)

    socket.on('setMessage', (newMessage) => {

      console.log('Websocket: Received new message: '+JSON.stringify(newMessage));

      message = newMessage;

      socket.broadcast.emit('count', message.count)      
      socket.broadcast.emit('message', message.message)
      socket.broadcast.emit('price', message.price)
      socket.broadcast.emit('author', message.author)
      socket.broadcast.emit('date', message.date)
      socket.broadcast.emit('step', message.step)      

    });
  });

  const context = {};

  const sheet = new ServerStyleSheet();

  const html = ReactDOMServer.renderToString(
    
    sheet.collectStyles(

      <Provider store={store}>

        <StaticRouter location={req.url} context={context}>

          <App/>

        </StaticRouter>

      </Provider>
    )
  );

  const styles = sheet.getStyleTags();

  if(context.url){
    res.writeHead(301, {
      Location: context.url
    })
    res.end();
  
  }else{

    res.header('Content-Type', 'text/html');
    res.write(`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="shortcut icon" type="image/x-icon" href="/static/favicon.png"><title>${config.info.slogan}</title>${styles}</head><body><div id="root">${html}</div><script src="/bundle.js"></script></body></html>`)
    res.end();
    
  }
  
});


server.listen(config.port, () => {

  console.log(`
    [${chalk.hex('#FFD700').bold(config.info.name)} ${chalk.red(`(${config.version.number})`)} "${chalk.blue(config.version.name)}"]
    - Listening on port ${chalk.yellow(config.port)}
  `);

});

