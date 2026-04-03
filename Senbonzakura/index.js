import React from 'react';
import ReactDOM from 'react-dom';

function Welcome2({name}) {
  return <h1>Välkommen till mitt projekt, {name}!</h1>;
}

function Card({tema, description}) {
  return (
    <div className="card">
      <h2>{tema}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome2 name="Mikiel" />
      <Card tema="React" description="Lär dig grunderna i React!" />
      <Card tema="JavaScript" description="Förbättra dina JS-kunskaper!" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));