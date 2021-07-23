import React from 'react';
import ReactDom from 'react-dom';
import reactImgPath from './react.png';
import './main.scss';

const img = document.createElement('img');
img.src = reactImgPath;
document.body.appendChild(img);

const App = () => <p>Hello React!!!</p>;

    ReactDom.render(<App/>,
        document.getElementById('root'));