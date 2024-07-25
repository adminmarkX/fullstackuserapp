import React, { Component } from "react";
import UserServices from "../../services/UserServices";

class addUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      gender: "",
      birthdate: "",
      homeAddress: "",
      workAddress: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.emailId = this.changeEmailIdHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeBirthdateHandler = this.changeBirthdateHandler.bind(this);
    this.changeHomeAddressHandler = this.changeHomeAddressHandler.bind(this);
    this.changeWorkAddressHandler = this.changeWorkAddressHandler.bind(this);
  }
  saveUser = (e) => {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      gender: this.state.gender,
      bdate: this.state.bdate,
      homeAddress: this.state.homeAddress,
      workAddress: this.state.workAddress,
    };
    console.log("user =>" + JSON.stringify(user));

    UserServices.createUser(user).then((res) => {
      this.props.history.push("/users");
    });
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  changeBirthdateHandler = (event) => {
    this.setState({ bdate: event.target.value });
  };
  changeHomeAddressHandler = (event) => {
    this.setState({ homeAddress: event.target.value });
  };
  changeWorkAddressHandler = (event) => {
    this.setState({ workAddress: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add User Form</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name </label>
                    <input
                      placeholder="First name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Last Name </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Email </label>
                    <input
                      placeholder="Email"
                      name="email_id"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Gender </label>
                    <input
                      placeholder="Gender"
                      name="gender"
                      className="form-control"
                      value={this.state.gender}
                      onChange={this.changeGenderHandler}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Birthday </label>
                    <input
                      placeholder="B-DAY"
                      name="birthdate"
                      className="form-control"
                      value={this.state.bdate}
                      onChange={this.changeBirthdateHandler}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Home Address </label>
                    <input
                      placeholder="Home Address"
                      name="homeAddress"
                      className="form-control"
                      value={this.state.homeAddress}
                      onChange={this.changeHomeAddressHandler}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Work Address </label>
                    <input
                      placeholder="Work Address"
                      name="workAddress"
                      className="form-control"
                      value={this.state.workAddress}
                      onChange={this.changeWorkAddressHandler}
                    ></input>
                  </div>
                  <button className="btn btn-success" onClick={this.saveUser}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addUser;
