import 'bootstrap/dist/css/bootstrap.min.css';
// imports minified version of bootstrap and ensures styles are being rendered.

import Login from './Login';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code');
console.log(code);

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App;
