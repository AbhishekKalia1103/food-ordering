import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //state variables in constructor
    //old way of creating state variables, before hooks
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default"
      },
    };

    console.log(this.props.name + " Child Constructor");
  }

  // componenetDidMount is used to make API calls after the component is rendered, just like useEffect in functional component.
  async componentDidMount() {
    console.log(this.props.name + " Child mounted");

    //Api call

    const data = await fetch("https://api.github.com/users/AbhishekKalia1103");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("Component will unmount")
  }

  render() {
    console.log(this.props.name + " Child rendered");
    const { name, location, avatar_url } = this.state.userInfo;
  
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9041749729</h4>
      </div>
    );
  }
}

export default UserClass;
