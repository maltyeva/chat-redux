import React, { Component } from 'react';
import Message from '../components/Message.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    messages: state.messages
  } 
}

class MessageList extends Component {
	render() {

		return(
      this.props.messages.map((message) => <Message key={message.content} message={message}/>)
			)
	}
}

export default connect(mapStateToProps, null) (MessageList);