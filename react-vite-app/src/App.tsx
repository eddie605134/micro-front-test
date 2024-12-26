import Router from './router/index'
import './App.css';
function App({ actions }: { actions: any }) {
  return (
    <div>
      <Router actions={actions}></Router>
    </div>
  );
}
export default App;