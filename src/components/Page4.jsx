import React from 'react';

const Page4 = () => (
  <div id="page4">
    <h1>Our Partners</h1>
    <div id="client-container">
      {['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5', 'Client 6'].map((client, i) => (
        <div key={i} className="client-box">
          <h2>{client}</h2>
        </div>
      ))}
    </div>
  </div>
);

export default Page4;
