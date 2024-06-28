import React, { useState } from 'react';
import { Col, Card, Button, CardGroup, Badge } from 'react-bootstrap';
import './Dashboard.css';

function Dashboard() {
  const [readStatus, setReadStatus] = useState(Array(10).fill(false));

  const handleViewOnSite = (idx) => {
    const newReadStatus = [...readStatus];
    newReadStatus[idx] = true;
    setReadStatus(newReadStatus);
  };

  return (
    <>
      <div className='titleView'>
        <h3>Welcome to NewsAdmin</h3>
      </div>

      <CardGroup>
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col key={idx}>
            <Card border="info" style={{ width: '18rem', margin: '10px' }} className="mb-2 news-card">
              <div className="card-img-wrapper">
                <Card.Img variant="top" src="https://fernandafamiliar.soy/wp-content/uploads/2024/06/captura-de-pantalla_-katherine.png" />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="d-flex align-items-center">
                  <Button variant="primary" onClick={() => handleViewOnSite(idx)}>View onSite</Button>
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
