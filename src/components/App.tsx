import {Outlet } from 'react-router-dom';



const App = () => {
  return (
    <div className="bg-gradient-to-b from-violet-500 to-fuchsia-500 h-screen">
       <Outlet />
    </div>
    
  );
};

export default App
