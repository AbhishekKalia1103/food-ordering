import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent mounted");
  }

  render() {
    console.log("Parent rendered");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User:
          {/** hooks not work in class based componenets, that is why here is another way to use useContext data in class based components .*/}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className=" text-xl  font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste react web series</h2>
        <UserClass name="First" location="Gurgaon (class)" />
      </div>
    );
  }
}

export default About;
