import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { saveNewsToLocalStorage } from '../utils/localStorageHelper';
import ClientCrudService from '../../services/ClientCrudService';

async function loginUser(credentials) {
  const { username, password } = credentials;

  if (username === "adminx" && password === "adminx") {
    return {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoxMDYyLCJ1c2VybmFtZSI6ImFkbWlueCIsInJvbGUiOiJBZG1pblRvcE5ld3MiLCJwZXJtaXNzaW9ucyI6WyJUb3BOZXdzX1JXIiwiQ2xpZW50c19SVyIsIkRhc2hib2FyZF9SVyJdLCJpYXQiOjE3MTk1MjA3ODIsImV4cCI6MTcxOTYwNzE4Mn0.ZHGFhW0NpbkzCoacx63mTiihX5VqYonhHV1slGjpGJI",
      expiry: 1719510051374
    };
  } else {
    return {};
  }
}

export function Login({ token, setToken }) {
  const Navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const dataSearch = {};
      const response = await ClientCrudService.getAllNews(dataSearch);
      const newsData = response.data.map(item => ({
        id: item.id,
        title: item.title.rendered,
        image: item.jetpack_featured_media_url,
        createdAt: item.date,
        modifiedAt: item.modified,
        status: item.status,
        link: item.link,
        content: item.content.rendered,
        readStatus: false
      }));

      saveNewsToLocalStorage(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    if (token) {
      Navigate("/home");
    }
  }, [token, Navigate]);

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [successLogin, setSuccesLogin] = useState(true);

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccesLogin(true);
    const tokenData = await loginUser({
      username,
      password
    });

    if (tokenData.token) {
      await fetchNews();
      setToken(tokenData);
      Navigate("/home");
    }

    setSuccesLogin(false);
  }


  return (
    <>
      <div className="Auth-form-container products">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <div className="text-center">
              <img src="logo-fixadmin.png" alt='logo' style={{ width: '250px' }} />
              <h4 className="mt-1 mb-4 pb-1">Welcome to NewsAdmin</h4>
            </div>
            <div className="form-group">
              <label style={{ fontSize: '20px' }}>Username</label>
              <input
                type="username"
                className="form-control"
                placeholder="Enter Username"
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label style={{ fontSize: '20px' }}>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {!successLogin
        ? (<Alert key='danger' variant='danger'>
          ¡intenta de Nuevo, Datos Invalidos!
        </Alert>)
        : ""
      }
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}