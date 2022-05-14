import Prices from './views/Prices';
import './App.css';

import NavBar from './components/NavBar';
import { PageProvider } from './contexts/PageContext';

function App() {

  return (
    <div className="App">
      <PageProvider>

          <NavBar/>
          <Prices/>
      </PageProvider>
    </div>
  );
}

export default App;
