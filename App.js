
import React from "react"
import ReactDOM from "react-dom/client"

//JSX (transpiled before it reaches the JS )-Parcel -Babel
//JSX => Babel transpiles it to React.createElement (executed) => ReactElement-JS object (rendered as) =>HTMLElement(render)


// const jsxHeading =
//  (<h1 className="head" tabIndex="5">
//     Namaste React from JSX 🚀
//     </h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//React Component
//Class Based Components-OLD
//Functional Components-NEW
//with return (better syntax)

const Title =() =>

 (

    <h1 className="head" tabIndex="5" >
        {elem}Namaste Title </h1>);



    const title=<h1 className="head" tabIndex="5">Namaste from react element</h1>

    const elem =<span>React Element</span>
//Component Composition

const number=10000
const HeadingComponent = () =>
{
 return(
    <div id ="container">
        <Title/>
        <h2>{number}</h2>
        {title}
        <h2>{console.log("hshdsd")}</h2>
           <h1 className="heading">
            Namaste Javascript from Headingcomponent 🚀
         </h1>
    </div>
     
          )
}

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)

//without return 
// const FunctionalComp =() =>( <h1 className="heading">Namaste Javascript from Functionalcomp 🚀</h1>)

// const FunctionalCom1 =() => <h1 className="heading">Namaste Javascript from FunctionalComp1🚀</h1>
// const fn =()=> true;
// const fn1 =() => {return true}

