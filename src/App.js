import Home from './Page/Home';
import 'antd/dist/antd.min.css';
import { Provider as PokeProvider } from './Context/dataContext';

function App() {
  return (
    <>
    <PokeProvider>
      <Home/>
    </PokeProvider>
    </>
  );
}

export default App;
