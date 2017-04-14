require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
// imageData = (function getImageUri(imageDataArr){

// 	return imageDataArr.map(function(item){

// 		var imageURL = require('../images/'+ item.fileName);

// 		return Object.assign(item, {"imageURL": imageURL})

// 	})

// })(imageData)
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
