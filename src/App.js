import {React,useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';


function QuoteGenerator(){
  var[quotetext,setquotetext]=useState("");
  var[quoteauthor,setquoteauthor]=useState("");

  const getquote = async () => {  // Step 4
    try {
      // 1. Use the fetch() method to make a GET request to the API endpoint
      const response = await fetch('https://api.quotable.io/random');
      
      // 2. Use the await keyword to wait for the response to be returned
      // 3. Use the .json() method to parse the response data into JSON format
      const data = await response.json();
  
      // 4. Access the `content` and `author` fields of the JSON data
       quotetext = data.content;
       quoteauthor = data.author;
  
      // 5. Update the state variables with the fetched data using the setQuote() and setAuthor() functions
      setquotetext(quotetext);
      setquoteauthor(quoteauthor);
    } catch (error) {
      // If there's an error with the API request, log the error to the console
      console.error(error);
    }
  };

  // step 5
  useEffect(() => {    /* One might think that as we already exatracted the quote in step 4 i.e getquote then what is the 
       need of useffect. But useffect will be needed so that every time a new quote generates and also to itialise the quote data and update state varables
       with it  */
      getquote();
  },[]) 
  
  return(
  <>
    <h1>Welcome to Project 3 !</h1>
    <Quotedisplay quotetext={quotetext} quoteauthor={quoteauthor}/>
    <button onClick={getquote}>Generate New Quote</button>
  </>  
  )

}

// Step 6

function Quotedisplay({quotetext,quoteauthor}){  // Responsible for displaying the text and the author
    if(quotetext===""||quoteauthor===""){
        return (
          <h2>Loading.....</h2>
        )
    }
    else{
       return(
         <>
         <h2>{quotetext}</h2>
         <h3>by : {quoteauthor}</h3>
         </>
       )
    }
} 

/*
function Todo(){ 
  const tasks=[
    "Learn ReactJS",
    "Try Leetcode Daily Problem",
    "Apply for Companies"
  ];


const listitems=(e)=>{
   return <li key={e.toString()}>{e}</li>   // A key in a list item helps us to identify which items are added,removed or removed
 }
   var display=tasks.map(listitems);   

 //  const[add,setadded]=useState([display]);
   
/*  const update=useEffect(() => {    /* The problem is that even after I added tasks as a dependency 
  and useeffect should be called only after the tasks gets updated but even after reloading the page
  and clciking the check or add task button also , the effect through useeffect gets called */ 
   
/*    const add = prompt('Enter the task')
    console.log(add);
    tasks.push(add);
    console.log(tasks);
   },[tasks])   


   return (
     <>
     <h1>Welcome to Project 3! (Incomplete)</h1>
     <h2>TODO TASKS : <ol>{display}</ol></h2>

     <button onClick={
       ()=> {
        const add = prompt('Enter the task')
        console.log(add);
        tasks.push(add);
        console.log(tasks);
       }
     }>Check</button>

     <button onClick={()=> {
      const add = prompt('Enter the task')
      console.log(add);
      tasks.push(add);
      console.log(tasks);
     }}>ADD A NEW TASK</button>

     <button>REMOVE TASK</button>
     </>

   )
}  */



function App() {
  
  let[count,setcount]=useState(0); /* Here we are using a usetstate hook whch takes two 
  values , first is the initial state in which our html element is and the other one will be a function to change the state */ 
 
  let[count2,setcount2]=useState(0);

 /*  setcount((count) => {  
       count+1;
   }) */


/*   setcount=() =>(count)=>{
     console.log(count+1);
     return count+1;
   } 
   
   in return <button onClick={setcount()}>Increment1</button>
*/


  return (
    <>
    <div className='p1'> 
      <h1>Welcome to Counter 1 !</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => setcount(count+1)}>Increment</button>
    </div> 

    <div className='p2'>
    <h1>Welcome to counter 2</h1>
    <h2>Count : {count2}</h2>
    <button onClick={() => setcount2(count2+1)}>+1</button>
    <button onClick={() => setcount2(count2+2)}>+2</button>
    <button onClick={() => setcount2(count2+4)}>+4</button>
    <button onClick={() => setcount2(count2+7)}>+7</button>
    </div>

    <div className='proj3'></div>
    <QuoteGenerator/>
    </>
  );
  
}


export default App;
