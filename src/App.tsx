import React from "react";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";


const App: React.FC = () => {
  return (
    <div className='min-h-screen p-8 bg-indigo-200'>
      <Navbar />
      <HomePage />
    </div>
  );
}
export default App;
