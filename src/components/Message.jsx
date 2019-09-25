import React, { Component } from 'react';

class Message extends Component {
  render() {
    return(
      <div className="notification">
  <div className="notification-content">
    <p><small>{this.props.message.created_at}</small></p>
    <p>{this.props.message.content} <strong>{this.props.message.author}</strong></p>
  </div>
</div>
      )
  }
}

export default Message;