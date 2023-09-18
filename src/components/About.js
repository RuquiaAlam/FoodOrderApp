import React from "react"
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{


    constructor()
    {
        super();
        console.log(" Parent constructor ")
    }

    render()
    {
        console.log("Parent render");
        return(
            
                <div>
                    <h1>Parent Class</h1>
                    LoggedIn User
                    <UserContext.Consumer>

                        {({loggedInUser})=>
                           <h1 className="text-xl font-bold">{loggedInUser}</h1>

                        }
                    </UserContext.Consumer>
                  
                    <User name={"Ruquia Alam (function)"}/>
                    {/* <UserClass name = {"Ruquia Alam(class)"} location={"Hyderabad(class)"}/> */}
                    {/* <UserClass name = { "Zaara Khan(class)"} location={"Hyderabad(class)"}/> */}
                </div>
            
            
        )

    }
    componentDidMount()
    {
console.log("Parent componentDidMount");

    }
}
export default About;