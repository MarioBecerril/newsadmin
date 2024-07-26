import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import { getNewsByIdFromLocalStorage } from '../utils/localStorageHelper';

export default function ModalNews({ show, handleClose, dataItem }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (show && dataItem.codeItem > 0) {
      const newsItem = getNewsByIdFromLocalStorage(dataItem.codeItem);
      if (newsItem) {
        setContent(newsItem.content);
        setImage(newsItem.image);
      }
    } else {
      setContent('');
      setImage('');
    }
  }, [dataItem, show]);

  function createMarkup(html) {
    let cleanHtml = DOMPurify.sanitize(html);
    const tempElement = document.createElement('div');
    tempElement.innerHTML = cleanHtml;
    const images = tempElement.getElementsByTagName('img');
    for (let img of images) {
      img.style.maxWidth = '80%';
      img.style.height = 'auto';
      img.style.display = 'block';
      img.style.margin = '0 auto';
    }

    return { __html: tempElement.innerHTML };
  }

  return (
    <>
      <Modal size="lg" centered show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>You are viewing News Id: {dataItem.codeItem}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="bg-dark text-white">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card.Img src={image} alt="Card image" style={{ width: '600px', height: 'auto' }} />
            </div>
            <Card.Body>
              <Card.Text dangerouslySetInnerHTML={createMarkup(content)} />
            </Card.Body>
          </Card>
          <hr />
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
