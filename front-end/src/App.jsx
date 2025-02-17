import React from 'react';
import Produtos from './Produtos';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-600">Drums Shop</h1>
      <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
        <Produtos />
      </div>
    </div>
  );
};

export default App;