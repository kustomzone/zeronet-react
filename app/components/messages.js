import React from 'react';
import { connect } from 'react-redux';

// import ZeroFrame module
import ZeroFrame from '../zeroframe/zeroframe';


const Messages = React.createClass({
  getInitialState: function() {
    return {
      auth: false,
      messages: []
    };
  },

  componentDidMount: function() {
    ZeroFrame.cmd("siteInfo", {}, function(data) {
      console.log(data);
      this.setState({auth: false});
   });
  },

  handleClick: function() {
    ZeroFrame.cmd("certSelect", [["zeroid.bit"]], function () {
      console.log(chat);
    });
    this.setState({auth: 'lola@zeroid.bit'});
  },

  render: function() {
    var form;
    if (this.state.auth) {
      console.log('chat');
      form =  <form>
                <h4>Glad to meet you {this.state.auth}</h4>
                <fieldset className="form-group">
                  <label htmlFor="message">Your message</label>
                  <textarea type="text" className="form-control" id="message">
                  </textarea>
                </fieldset>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
    } else {
      console.log('chien');
      form =  <p>Too bad you need to be auth to post a message.<br/>
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Select user</button>
              </p>
    }
    return (
      <article>
        <h1>Leave me a message</h1>
        <p>
          Tell me what you think of it !
        </p>
        { form }
      </article>
    );
  }
});

export default Messages;
