import React, { Component } from 'react';
import Message from '../components/Message.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessages } from '../actions/index.js';

function mapStateToProps (state) {
  return {
    messages: state.messages
  } 
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    { setMessages }, 
    dispatch 
    );
};


class MessageList extends Component {

  state = {
  setMessages: this.props.setMessages()
  }

	render() {

    // console.log(33, this.state)

		return(
      this.props.messages && this.props.messages.map((message) => <Message key={message.content} message={message}/>)
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (MessageList);