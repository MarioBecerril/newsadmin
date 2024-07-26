import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import { Navbar } from './components/dashboard/Navbar';
import { Login } from './views/login/Login';
import  Dashboard  from './views/dashboard/Dashboard';
import { ProtectedRoute } from "./components/app/ProtectedRoute";
import TopNews from './views/clients/TopNews';
import { NotFound } from './views/pages/NotFound';
import useToken from './components/app/useToken';
import IndexTask from './views/todolist/gpt/index';
import IndexMeta from './views/todolist/meta/index';
import IndexClaude from './views/todolist/claude/index';

function App() {
  const {token, setToken} = useToken();

  if(!token)
    return (<div className="App max-w-[600px] mx-auto">
      <Router>
        <Routes>
          <Route index element={<Login token={token} setToken={setToken}/>} />
          <Route path="/*" element={ <Login token={token} setToken={setToken}/> } />
          <Route path="/login" element={ <Login token={token} setToken={setToken}/>}/>
        </Routes>
      </Router>
    </div>)

return (
  <div className="mx-auto shadow-lg mb-5 bg-white rounded" style={{ width: '95%' }}>
      <Router>
        <Navbar/>
      <Routes>
        <Route index element={<Dashboard token={token}/>} />
        <Route path="/*" element={ <Dashboard token={token}/>} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/> } />
        <Route element={<ProtectedRoute isAllowed={!!token} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/topnews"
          element={
            <ProtectedRoute
              redirectTo="/"
              isAllowed={!!token }
            >
              <TopNews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo-list-gpt"
          element={
            <ProtectedRoute
              redirectTo="/"
              isAllowed={!!token }
            >
              <IndexTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo-list-meta"
          element={
            <ProtectedRoute
              redirectTo="/"
              isAllowed={!!token }
            >
              <IndexMeta />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo-list-claude"
          element={
            <ProtectedRoute
              redirectTo="/"
              isAllowed={!!token }
            >
              <IndexClaude />
            </ProtectedRoute>
          }
        />
          <Route path='*' element={<NotFound />} />
      </Routes>
      </Router>
    </div>
  );

}

export default App
