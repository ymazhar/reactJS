const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// создание express приложения
const app = express();

// импорт компонента App
const App  = require( '../src/components/app' ).default;

// обслуживание статических ресурсов
app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../dist' ) ) );

// в ответ на любые другие запросы отправляем 'index.html'
app.use( '*', (req, res ) => {
// читаем файл `index.html`
let indexHTML = fs.readFileSync( path.resolve( __dirname, '../dist/index.html' ), {
    encoding: 'utf8',
} );

let appHTML = ReactDOMServer.renderToString(<App/>);

indexHTML = indexHTML.replace(`<div id="root"></div><div id="modal-root"></div>`, `<div id="root"></div>
    <div id="modal-root">${appHTML}</div>`);


// устанавливаем заголовок и статус
    res.contentType( 'text/html' );
    res.status( 200 );

    return res.send( indexHTML );

} );
// запускаем сервер на порту 9000
app.listen( '9000', () => {
    console.log( 'Express server started at <http://localhost:9000>' );
} );