import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';

class Header extends Component {

  constructor() {
    super();
    this.notificationSystem = null;
  }

  addNotification(event) {
    event.preventDefault();
    this.notificationSystem.addNotification({message: 'Notification message', level: 'success'});
  }

  render() {
    return <div>
      <button onClick={this.addNotification.bind(this)}>Add notification</button>
      <NotificationSystem ref={node => this.notificationSystem = node} />
    </div>
  }
}
export default Header
