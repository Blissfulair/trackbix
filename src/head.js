import React from 'react';
import ReactDOM from 'react-dom';
import SEO from './component/seo';


ReactDOM.render(
  <React.StrictMode>
    <SEO />
  </React.StrictMode>,
  console.log(document.querySelector('head'))
);


