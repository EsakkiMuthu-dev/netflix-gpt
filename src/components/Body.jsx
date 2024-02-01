import { createBrowserRouter } from 'react-router-dom';

import Login from './Login';
import Browse from './Browse';

const Body = () => {
    const appRouter=createBrowserRouter(
        
    );
  return (
    <div>
      <Login />
      <Browse />
    </div>
  );
};
export default Body;
