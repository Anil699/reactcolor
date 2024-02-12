import './App.css';
import { useEffect, useState} from  'react'

function App() {
  const [color,setColor] = useState ('blue')
  const click = color => {
    setColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color]
  )
  return (
    <div className = "app">
    <div className='center'>
      <button  onClick={
        ()=>click('yellow')
      }>Change Color</button>
    </div>
    </div>
    
  );
}

export default App;
