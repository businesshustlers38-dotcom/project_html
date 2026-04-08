import React, { useState } from 'react';
import './App.css';
// Komponent med props
function Welcome({ name }) {
  return <h1>Börja att lära dig koda, {name}!</h1>;
}

// Komponent med state och events
function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Räknare: {count}</h2>
      <button onClick={handleIncrement}>Öka</button>
      <button onClick={handleDecrement}>Minska</button>
    </div>
  );
}

// Komponent med lista och props
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const items = ['Komponenter', 'Props', 'State', 'Events', 'Hooks'];

  return (
    <div className="App">
      <Welcome name="Mikiel" />
      <Counter />
      <HooksExample />
      <userEffect />
      <h2>börja sakta och lära mig:</h2>
      <ItemList items={items} />
    </div>
  );
}

export default App;

function HooksExample() {
  const [transform, setTransform] = useState(0);

  const handleTransform = () => {
    setTransform(transform + 1);
  }

  const handleReset = () => {
    setTransform(0);
  }
  
return (
    <div>
      <h2>Transform: {transform}</h2>
      <button onClick={handleTransform}>Transformera</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

