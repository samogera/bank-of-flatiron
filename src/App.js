import React from 'react';
import './App.css';
import TableTransaction from './components/TableTransaction';

function App() {

  let TransactionRecords = [
    { date: "2024-05-01", description: "Lunch with colleagues", category: "Social", amount: 25.00 },
    { date: "2024-05-02", description: "Electricity bill", category: "Utilities", amount: 70.00 },
    { date: "2024-05-03", description: "Dinner at a restaurant", category: "Food", amount: 60.00 },
    { date: "2024-05-04", description: "Movie tickets", category: "Entertainment", amount: 20.00 },
    { date: "2024-05-05", description: "Yoga class", category: "Health", amount: 15.00 },
    { date: "2024-05-06", description: "Online course subscription", category: "Education", amount: 50.00 }
  ];

  return (
    <div className="App">
      <div className='royaltitle'>The Royal Bank of Flatiron</div>
      <TableTransaction records={TransactionRecords}/>
    </div>
  );
}

export default App;
