import logo from './logo.svg';
import './App.css';
import Greet from './Components/greet'
import User from './Components/user'


//get the name from backend and store it in name
function ProductList(props){
  let {id,name}=props

  return(
    <div>
    {/*Conditional rendering 1*/}

{/*    {id==1 ? (
      <div>You are the number one</div>
      ):(
      <></>
      )
    }*/}
    {/*Conditional rendering 2*/}

{/*        {id!=1 &&(
      <div> You are the number one</div>
      )
      }*/}
    {name}{id}



    </div>
    )
}
function App() {
  const ids=[1,2,3,4]
  const names=["fruit","veg","non-veg","juice"]
  return (
    <div>

    {/*passing props to the component*/}
    <User name="Admin" admin="false" age="1009"/>

    {/*<ProductList id={1} name={"fruit"}></ProductList>
    <ProductList id={2} name={"veg"}></ProductList>
    <ProductList id={3} name={"non-veg"}></ProductList>
    <ProductList id={4} name={"juice"}></ProductList>*/}

    {names.map((value,index)=>(


   <ProductList id={ids[index]} name={[names[index]]}/>
)
)
    }
    </div>


  );
}
export default App;

//Whatever you give inside the /> or ending tag symbol it is considered as props
//All the H1, div elements are HTML tags if you need to write
// JS code inside the HTMl snippet means you have to open { and end with }

{//   name:"Ajay",
//   admin:false
// }
// {} -> JSX expression
//embedding HTML tags in JS  =>JSX
//props means properties 
// what are the properties of a CAR -> color,speed,RPM
//everything is a OBJECT
}
