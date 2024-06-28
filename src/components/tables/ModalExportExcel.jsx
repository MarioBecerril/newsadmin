import React, { useState, useEffect } from 'react';
import { Button, Form, Modal, Row, Spinner, Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';
import ConfigAxios from '../../services/ConfigAxios';

export default function ModalExportExcel({ show, handleClose, objTextFind, urlBaseExport, nameFile }) {
  const [viewSpinner, setViewSpinner] = useState(false);
  const [filterExport, setFilterExport] = useState(objTextFind ? 1 : 0);

  useEffect(() => {
    if (!show) {
      setFilterExport(objTextFind ? 1 : 0);
    }
  }, [show, objTextFind]);

  const openInNewTab = async () => {
    setViewSpinner(true);
    try {
      const url = await getExcel(objTextFind);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', nameFile);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    } finally {
      setViewSpinner(false);
    }
  };

  const getExcel = async (objTextFind) => {
    const { APIFIXSO, options } = ConfigAxios();
    options.responseType = 'blob';
    const filter = (filterExport === 1) ? objTextFind : '';
    const response = await axios.get(APIFIXSO + urlBaseExport + filter, options);
    return window.URL.createObjectURL(new Blob([response.data]));
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilterExport(Number(value));
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
      <Modal.Header>
        <Modal.Title>Exportar a Excel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="main" id="justify-tab-example" className="mb-3" justify>
          <Tab eventKey="main" title="Selecciona">
            <Row className="mb-3">
              <Form>
                <div className="mb-3">
                  <Form.Check type={'radio'} id={`check-api-radio`} inline>
                    <Form.Check.Input
                      name="group1"
                      type={'radio'}
                      value={0}
                      onChange={handleChange}
                      defaultChecked={filterExport === 0} />
                    <Form.Check.Label>Descargar Todos los Registros</Form.Check.Label>
                  </Form.Check> {'  '}  {'  '}

                  {(!objTextFind) ? '' :
                    (<Form.Check type={'radio'} id={`check-api-radio`} inline>
                      <Form.Check.Input
                        name="group1"
                        type={'radio'}
                        value={1}
                        onChange={handleChange}
                        checked={filterExport === 1} />
                      <Form.Check.Label>Descargar con Filtro</Form.Check.Label>
                    </Form.Check>)
                  }
                </div>
              </Form>
            </Row>
            <div>
              {viewSpinner && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              <hr />
              <Button className="btn btn-success" onClick={openInNewTab}>
                Descargar
              </Button>
                {' '}
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}