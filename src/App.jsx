
import './App.css'
import {TodoList} from './components/TodoList'
import LoginForm from './components/loginform/loginForm';

function App() {

  return (
    <>
    <div>
      <LoginForm/>
    </div>
    <div className='todo-app'>
      <TodoList />
    </div>
      </>
      
  );
}

export default App;
