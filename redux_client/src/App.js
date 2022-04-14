import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { loginAction, logoutAction } = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log(auth);

  return (
    <div className="App">
      <h1>Hello {auth ? '1' : '0'} here</h1>
      <button onClick={() => loginAction()}>Login</button>
      <button onClick={() => logoutAction()}>logout</button>
    </div>
  );
}

export default App;
