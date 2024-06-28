import React, { useState, useEffect } from 'react';
import { Col, Card, Button, CardGroup, Badge } from 'react-bootstrap';
import './Dashboard.css';
import { getNewsFromLocalStorage, updateReadStatusInLocalStorage } from '../utils/localStorageHelper';

function Dashboard() {
  const [news, setNews] = useState([]);
  const [readStatus, setReadStatus] = useState([]);

  const handleViewOnSite = (idx, id, link) => {
    updateReadStatusInLocalStorage(id, true);
    const newReadStatus = [...readStatus];
    newReadStatus[idx] = true;
    setReadStatus(newReadStatus);
    window.open(link, '_blank');
  };

  useEffect(() => {
    const storedNews = getNewsFromLocalStorage();
    setNews(storedNews);
    setReadStatus(storedNews.map(newsItem => newsItem.readStatus));
  }, []);

  return (
    <>
      <div className='titleView'>
        <h3>Welcome to NewsAdmin</h3>
      </div>

      <CardGroup>
        {news.map((newsItem, idx) => (
          <Col key={newsItem.id}>
            <Card border="info" style={{ width: '18rem', margin: '10px' }} className="mb-2 news-card">
              <div className="card-img-wrapper">
                <Card.Img variant="top" src={newsItem.image} />
              </div>
              <Card.Body>
                <Card.Title>{newsItem.title}</Card.Title>
                <Card.Text>
                  Created on: {new Date(newsItem.createdAt).toLocaleDateString()}
                </Card.Text>
                <div className="d-flex align-items-center">
                  <Button variant="primary" onClick={() => handleViewOnSite(idx, newsItem.id, newsItem.link)}>View onSite</Button>
                  {readStatus[idx] ? (
                    <Badge bg="success" className="ms-2">Leído</Badge>
                  ) : (
                    <Badge bg="danger" className="ms-2">Por leer</Badge>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </CardGroup>
    </>
  );
}

export default Dashboard;
