import React, { Component } from 'react';
import Navigation from '../Navigation';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div className="wrapper">
      {/* //   <nav id="sidebar">
      //       <div class="sidebar-header">
      //           <h3>Bootstrap Sidebar</h3>
      //       </div>

      //       <ul class="list-unstyled components">
      //           <p>Menu</p>
      //           <li class="active">
      //               <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
      //           </li>
      //           <li>
      //               <a href="#">About</a>
      //           </li>
      //           <li>
      //               <a href="#">Portfolio</a>
      //           </li>
      //           <li>
      //               <a href="#">Contact</a>
      //           </li>
      //       </ul>
      //   </nav> */}
        <Navigation />

        <h1>Welcome to your Dashboard</h1>


        { !!users && <UserList users={users} /> }
        { !!users && <UserState users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const UserState = ({ users }) =>
<div>
  <h2>List of Usernames of States</h2>
  <p>(Saved on Sign Up in Firebase Database)</p>

  {Object.keys(users).map(key =>
    <div key={key}>{users[key].state}</div>
  )}
</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);