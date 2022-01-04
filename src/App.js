import React from 'react';
import { HashRouter,Routes, Route, Link } from 'react-router-dom';
import User from './user';
import Item from './item';
import Allstoredata from './alldata';
import Myapi from './api';

function App() {
  return (
    <HashRouter>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container-fluid">
            <a className="navbar-brand"> Demo App </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Manage User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/itemlist">Manage Item</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/alldata">Redux All Store Data</Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/api">Get API data </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    <Routes>
        <Route exact path="/" element={<User/>}/>
        <Route exact path="/itemlist" element={<Item/>}/>
        <Route exact path="/alldata" element={<Allstoredata/>}/>
        <Route exact path="/api" element={<Myapi/>}/>

    </Routes>
    </HashRouter>
  );
}

export default App;
