import './App.css';
import '../src/sass/style.scss'
import useCustomRoutes from './routes/useCustomRoutes';

function App() {
  const myRoutes = useCustomRoutes()
  return myRoutes
}

export default App;
