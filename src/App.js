import classes from './App.module.scss';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals'

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <div className={classes.container}>
        <Meals />
        <Cart />
      </div>
    </div>
  );
}

export default App;
