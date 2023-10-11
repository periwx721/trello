import { BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Index from './components/routes/Index';
import { store } from './components/store/store';
function App() {

  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Index/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
