
import React from "react"
class UserClass extends React.Component
{
constructor(props)
{
    super(props);
    console.log(props);
    console.log( this.props.name+"Child constructor");
    this.state={
   userInfo:{
    name:"Dummy",
    avatar_url:"http://dummy-photo.com"

   }

    }
}
async componentDidMount()
{

    console.log(this.props.name+"Child ComponentDidMount")
    const data =await fetch("  https://api.github.com/users/RuquiaAlam");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo:json,
   
    })
}
componentDidUpdate()
{
console.log("Child componentDidUpdate")

this.timer = setInterval(()=>
{
console.log("Welcome Time!")
},1000);

}
componentWillUnmount()
{
  clearInterval(  this.timer);
console.log("ComponentWillUnmount is called")


}


    render()
    {
     
        console.log(this.props.name+"Child render");
        const {login,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
                
               
            <h2>Name:{this.state.userInfo.login}</h2>
          
            <img src={avatar_url}></img>
           
          </div>
        )
    }
}

export default UserClass;
//-----Mounting LifeCycle------
//Contructor(dummy)
//Render(dummy)
//componentDidMount<API call>
//<this.setState>

// when setState is called Update Cycle begins
// ---Updating------
//Reconciliation algorithm is called
//render(API data)
// <HTML>(new API data) 


//-----ComponentDidUpdate----
//----ComponentWillUnmount---
//when component will disappear from html

