import {React,useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'


function QuoteGenerator(){
  var[quotetext,setquotetext]=useState("");
  var[quoteauthor,setquoteauthor]=useState("");

  // To find the date and time of the present day 
  const d=new Date();
  const day=d.toLocaleDateString('en-IN',{weekday:'long'});
  const date=d.toLocaleDateString('en-IN',{month:'long'});
  const datedigit=d.getDate();
  console.log(day);
  console.log(date);
  console.log(datedigit);


  const getquote = async () => {  // Step 4
    try {
      const response = await fetch('https://api.quotable.io/random');

      const data = await response.json();
  
       quotetext = data.content;
       quoteauthor = data.author;
  
      
      setquotetext(quotetext);
      setquoteauthor(quoteauthor);
    } catch (error) {
      
      console.error(error);
    }
  };

  // step 5
  useEffect(() => {    
      getquote();
  },[]) 
  
  return(
  <>
    <h1 className='one'>Random Quote Generator!</h1>
    <div className='rqg'>
    <h2 className='dt'>{`${datedigit} ${date} 2023 `}</h2>
    <h2 className='line'>|| </h2>
    <h2 className='day'>{`${day}`}</h2>
    </div>
    <Quotedisplay quotetext={quotetext} quoteauthor={quoteauthor}/>
    <button onClick={getquote} className="btn">Generate New Quote</button>
    
  </>  
  )

}


// Step 6

function Quotedisplay({quotetext,quoteauthor}){  // Responsible for displaying the text and the author
    if(quotetext===""||quoteauthor===""){
        return (
          <h2 className='load'>Loading.....</h2>
        )
    }
    else{
       return(
         <>
         <h2 className='qttext'>{quotetext}</h2>
         <h4 className='by'>by</h4>
         <h3 className='qtauthor'>{quoteauthor}</h3>
         </>
       )
    }
} 





function App() {

  return (
    <>
      

    <div className='proj3'>
    <QuoteGenerator/>
    </div>
    </>
  );
  
}


export default App;
