import Login from './Login';
import Browse from './Browse';
import { appRouter } from 'react-router-dom';
const Body = () => {
  return (
    <div>
      <Login />
      <Browse />
    </div>
  );
};
export default Body;
