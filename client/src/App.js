import 'bootstrap/dist/css/bootstrap.min.css';
// imports minified version of bootstrap and ensures styles are being rendered.

import Login from './components/Login';
import Dashboard from './components/Dashboard';

const code = new URLSearchParams(window.location.search).get('code');
// gets the URL param 'code='.
console.log(code);

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}
// if code is found, renders dashboard component otherwise renders login component.
export default App;
