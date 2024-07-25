import React, { Component } from "react";
import UserServices from "../../services/UserServices";

class UserComponendList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
  }

  // this componentDidMount is is responsible to fetch
  // the data witht he help of UserServices.js Microservice
  componentDidMount() {
    UserServices.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  // this method is repsonsible to add the user into the
  //  add user section
  addUser() {
    this.props.history.push("/add-user");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Users List</h2>
        <div className="button">
          <button className="btn btn-primary" onClick={this.addUser}>
            Add an User
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Email</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((users) => (
                <tr key={users.id}>
                  <td>{users.firstName}</td>
                  <td>{users.lastName}</td>
                  <td>{users.homeAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserComponendList;
