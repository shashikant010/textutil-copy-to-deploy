import './App.css';
import React , {useState} from 'react';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const root=document.querySelector('body');
  root.style.color='black';

  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert(
      {msg:message,
      type:type}
    )
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      showalert('mode is dark mode','success');
      document.title='Textutil-darkmode'
      togglestyle();
      changerootstyle();
    }
    else{
      setmode('light');
      showalert('mode is light mode','success');
      document.title='Textutil-lightmode'
      togglestyle();
      changerootstyle();
    }
  }

  const changerootstyle=()=>{
    if(mode==='light'){
      root.style.backgroundColor='black';
      root.style.color='white';
    }
    else{
      root.style.backgroundColor='white';
      root.style.color='black';
    }
  }

  const [myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'
}
)

const togglestyle=()=>{
if(mode==='dark'){
    setMyStyle(
        {
            color:'black',
            backgroundColor:'white',
           
        }
    )
              
}
else{
    setMyStyle(
        {
            color:'white',
     backgroundColor:'black'
        }
    )

    
}
}



  return (
    <div className="App" style={myStyle}>

<Navbar title="textUtils" mode={mode} togglemode={togglemode} toggle={togglestyle}/>

<Alert alert={alert}/>


<Textform heading="Enter text below to analyze "style={myStyle} alert={showalert}/>
            

    




</div>

  ) 
}

export default App;
