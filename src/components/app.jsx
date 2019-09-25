import React from 'react';
import MessageList from '../containers/MessageList.jsx'

const App = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-4">TEST</div>
      <div className="col-sm-8">
      <MessageList />
      </div>
    </div>
    </div>
  );
};

export default App;
