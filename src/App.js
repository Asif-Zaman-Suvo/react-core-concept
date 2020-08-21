import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks=['Jashim','Salman Shah','Alomgir','Rubel',"shakib khan"]


  const friends=['Shuvo','Zobayer','Mredul','Riaz','Shakawat','Joy']

  const products=[

    
    
    {name:'Photoshop',price:"$99.88"},
    {name:'Illustrator',price:"$77.88"},
    {name:"PDF reader",price:"55.67"},
    {name:"premier EL",price:"255.67"}

  ]

  // const productsNames=products.map(product=>product)
  // console.log(productsNames);

  // const nayokNames=nayoks.map(nayok=>nayok);
  // console.log(nayokNames);

  const friendsName=friends.map(friends=>friends);
  console.log(friendsName);

  
    
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>i am a react developer</p>

        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)

          }

          {
            products.map(product=><li>{product.name}</li>)
          }

          {
            friends.map(friends=><li>{friends}</li>)
          }
          


  {/* <li>{nayoks[0]}</li>
  <li>{nayoks[1]}</li> */}

        </ul>
        {/* {
          products.map(pd=><Product product={pd}></Product>)
        } */}
        <Users></Users>
        <Counter></Counter>

        <Product name={products[0].name} price={products[0].price}></Product>

        <Product name={products[1].name} price={products[1].price}></Product>

        <Person name="Md Asifuzzaman Shuvo" age="24 years old" work="learning react framework" ></Person>
        <Person name="Jannatul Ferdous" age="21" work="Student at Dhaka University"></Person>
        


        
      </header>
    </div>
  );
}

function Counter(){

  const [count,setCount]=useState(0);

  const handleDecrease=()=>{
    const newCount=count-1;
    setCount(newCount);
  }
  
  const handleIncrease=()=>{
    const newCount=count+1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>

      <button onClick={handleDecrease}>Decrease</button>

    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(res=>res.json())
   .then(data=>setUsers(data));

  }, [])
  return (
    <div>
      <h3>Dynamic Users :{users.length}</h3>

      {
        console.log(users)
      }

      {
        users.map(user=><li>{user.phone}</li>)
      }
    </div>
  )
}



function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:"5px",
    backgroundColor:"lightgrey",
    height:"200px",
    width:"300px",
    float:"left"


  }

  return (
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>

      <button>Buy Now</button>  
    </div>
  )

}


function Person(props){

  
  return (
  <div style={{border:"2px solid red" , margin:"20px",padding:"20px"}}>
  <h1>Name:{props.name}</h1>
  <p>Age:{props.age}</p>
  <h4>Work:{props.work}</h4>
  </div>)
}

export default App;
