import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaRegTrashAlt } from "react-icons/fa";
import { RiAddBoxLine } from "react-icons/ri";
import ClientCrudService from '../../services/ClientCrudService';
import he from 'he';

export default function ModalNews({ show, handleClose, dataItem }) {

  const conditionView = (dataItem.typeView === 'View' || dataItem.typeView === 'Delete') ? true : false;

  const newModelRef = useRef(null);
  const [models, setModels] = useState([]);
  const [brandName, setBrandName] = useState('');
  const [successSend, setSuccessend] = useState(null);
  const [brandDescription, setBrandDescription] = useState('');
  const [enableSaveChanges, setEnableSaveChanges] = useState(true);

  useEffect(() => {
    if (show && dataItem.codeItem > 0) {
      ClientCrudService.getNewById(dataItem.codeItem).then(async res => {
        let currentBrand = res.data.data[0];
        setBrandName(currentBrand.name);
        setBrandDescription(currentBrand.description);
        setModels(currentBrand.models);
      });
    } else {
      setBrandName('');
      setBrandDescription('');
      setModels([]);
      setEnableSaveChanges(true);
      setSuccessend(null);
    }
  }, [dataItem, show]);

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const handleSubmit = async (event) => {

    let updateBrand = { name: brandName, description: brandDescription, models };
    if (!dataItem.codeItem && dataItem.typeView === 'Create') {
      await ClientCrudService.createNew(updateBrand).then(res => {
        setSuccessend('success');
        sleep(1500).then(() => {
          handleClose();
          window.location.href = '/brands';
        })
      }).catch(err => {
        console.log(err);
        if (err.response.status !== 200) {
          setSuccessend('danger');
        }
      });
    } else {
      await ClientCrudService.updateNew(updateBrand, dataItem.codeItem).then(res => {
        setSuccessend('success');
        sleep(1500).then(() => {
          handleClose();
          window.location.href = '/brands';
        })
      }).catch(err => {
        console.log(err);
        if (err.response.status !== 200) {
          setSuccessend('danger');
        }
      });
    }

  };

  const DeleteModel = (indexItem) => {
    setModels((prevState) =>
      prevState.filter((todo, index) => index !== indexItem)
    );
    setEnableSaveChanges(false);
  };

  const setAddNewModel = () => {
    if (newModelRef.current.value) {
      let newModel = newModelRef.current.value;
      setModels(models => [...models, newModel]);
      setEnableSaveChanges(false);
      newModelRef.current.value = '';
    }
  }

  const nameHandler = (event) => {
    setBrandName(event.target.value);
    setEnableSaveChanges(false);
  }

  const descriptionHandler = (event) => {
    setBrandDescription(event.target.value);
    setEnableSaveChanges(false);
  }

  let addSubmitButton = "";

  if (!conditionView) {
    addSubmitButton = (<><Button type="button" disabled={enableSaveChanges} onClick={() => handleSubmit()} >Guardar Cambios</Button></>);
  }

  const setCloseButton = <><Button variant="secondary" onClick={handleClose}> Close </Button> {'  '}  {'  '} </>;

  const content = "<p>Desde hace siete a\u00f1os, <a href=\"https:\/\/fernandafamiliar.soy\/noticias\/nacional\/mas-de-100-organizaciones-internacionales-exigen-justicia-para-las-victimas-del-clan-trevi-andrade\/\">Sergio Andrade<\/a>, exrepresentante de la cantante Gloria Trevi y jefe del llamado clan Trevi-Andrade, ha mantenido un perfil bajo, generando dudas sobre su paradero y estado de salud. Recientemente, <strong>surgieron rumores acerca de su supuesto fallecimiento<\/strong>, pero \u00bfqu\u00e9 hay de cierto en estas afirmaciones?<\/p>\n<p>La salud de Andrade, afectada desde su encarcelamiento, ha sido un tema de preocupaci\u00f3n. En prisi\u00f3n,<strong> se le diagnostic\u00f3 el S\u00edndrome de Guillain-Barr\u00e9<\/strong>, una condici\u00f3n neurol\u00f3gica debilitante. Desde principios de 2024, diversos informes han se\u00f1alado que su salud ha empeorado.<\/p>\n<p>En las \u00faltimas horas, <strong>comenzaron a circular rumores sobre la muerte de Sergio Andrade en Espa\u00f1a<\/strong>, donde supuestamente ha estado viviendo en los \u00faltimos a\u00f1os. Sin embargo, esta informaci\u00f3n no ha sido verificada. El conductor Javier Ceriani afirm\u00f3 haber recibido una llamada an\u00f3nima inform\u00e1ndole que Andrade hab\u00eda fallecido el 21 de junio en Barcelona. Ceriani, sin embargo, <strong>expres\u00f3 dudas sobre la veracidad de esta informaci\u00f3n<\/strong>, se\u00f1alando que la p\u00e1gina de Wikipedia de Andrade hab\u00eda sido editada 32 veces con la fecha de su muerte.<\/p>\n<p><img loading=\"lazy\" decoding=\"async\" data-attachment-id=\"282039\" data-permalink=\"https:\/\/fernandafamiliar.soy\/noticias\/entretenimiento\/muere-sergio-andrade-la-informacion-que-se-tiene\/attachment\/cp_sergio2\/\" data-orig-file=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_sergio2.png\" data-orig-size=\"947,515\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}\" data-image-title=\"CP_sergio2\" data-image-description=\"\" data-image-caption=\"\" data-medium-file=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_sergio2-300x163.png\" data-large-file=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_sergio2.png\" class=\"aligncenter size-full wp-image-282039\" src=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_sergio2.png\" alt=\"\" width=\"947\" height=\"515\" srcset=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_sergio2.png 947w, https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_sergio2-300x163.png 300w, https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_sergio2-768x418.png 768w, https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_sergio2-150x82.png 150w, https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_sergio2-696x379.png 696w\" sizes=\"(max-width: 947px) 100vw, 947px\" \/><\/p>\n<p>\u201cEl 21 de junio que a m\u00ed me avisaron, 32 veces entraron a Wikipedia la familia Andrade R\u00edos a contar que Sergio estaba muerto,<strong> fue la familia quien manipul\u00f3 Wikipedia 32 veces<\/strong>\u201d, coment\u00f3 Ceriani.<\/p>\n<p>Contrario a los rumores de su muerte, tambi\u00e9n <strong>se ha especulado que Andrade se encuentra hospitalizado en Canc\u00fan debido a complicaciones de salud<\/strong>. El canal Kadri Paparazzi inform\u00f3 que Andrade ha estado recibiendo atenci\u00f3n m\u00e9dica en Canc\u00fan desde hace casi dos semanas. Un paparazzi conocido como &#8216;Lobo&#8217; afirm\u00f3 haberlo visto en un hospital, donde Andrade estaba siendo dializado y consultando a un especialista.<\/p>\n<p>\u201c<strong>Estaba en un hospital hace 10 d\u00edas<\/strong>, estuve all\u00e1 por Canc\u00fan, se me fue (\u2026) tiene problemas, se est\u00e1 yendo a dializar, va a ver un especialista\u201d, asegur\u00f3 &#8216;Lobo&#8217;.<\/p>\n<p>Hasta el momento,<strong> ninguno de los rumores ha sido confirmado por fuentes oficiales<\/strong>, familiares de Andrade, ni por periodistas de espect\u00e1culos reconocidos. La veracidad de la informaci\u00f3n difundida por los canales mencionados (Chisme No Like y Kadri Paparazzi) ha sido cuestionada, dado que en el pasado <strong>han publicado noticias que posteriormente fueron desmentidas<\/strong>.<\/p>\n<p>Actualmente, el mismo programa, &#8216;Chisme no like&#8217;, asegur\u00f3 que han encontrado a Andrade con vida, desmintiendo la informaci\u00f3n que dieron a conocer ayer. Adem\u00e1s, comentan que <strong>es una estrategia del exrepresentante para lograr eludir a la ley estadounidense<\/strong>.<\/p>\n<p><img loading=\"lazy\" decoding=\"async\" data-attachment-id=\"282042\" data-permalink=\"https:\/\/fernandafamiliar.soy\/noticias\/entretenimiento\/muere-sergio-andrade-la-informacion-que-se-tiene\/attachment\/cp_sergio\/\" data-orig-file=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_SERGIO.png\" data-orig-size=\"938,515\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}\" data-image-title=\"CP_SERGIO\" data-image-description=\"\" data-image-caption=\"\" data-medium-file=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_SERGIO-300x165.png\" data-large-file=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_SERGIO.png\" class=\"aligncenter size-full wp-image-282042\" src=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_SERGIO.png\" alt=\"\" width=\"938\" height=\"515\" srcset=\"https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_SERGIO.png 938w, https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_SERGIO-300x165.png 300w, https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_SERGIO-768x422.png 768w, https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_SERGIO-150x82.png 150w, https:\/\/fernandafamiliar.soy\/wp-content\/uploads\/2024\/06\/CP_SERGIO-696x382.png 696w\" sizes=\"(max-width: 938px) 100vw, 938px\" \/><\/p>\n";

  function decodeAndSanitize(html) {
    return he.decode(html);
  }

  return (<>
    <Modal size="lg" centered show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title> {dataItem.typeView} {dataItem.nameView} Code {dataItem.codeItem}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Card className="bg-dark text-white">
      <Card.Img src="https://fernandafamiliar.soy/wp-content/uploads/2024/06/captura-de-pantalla_-katherine.png" alt="Card image" />
      <Card.Body>
          <Card.Text>
            {decodeAndSanitize(content)}
          </Card.Text>
        </Card.Body>
    </Card>

        <hr></hr>
        {setCloseButton}
        {addSubmitButton}
        {(successSend == 'danger') ? (<Alert key='danger' variant='danger'> Brand no actualizada!</Alert>)
          : (successSend == 'success') ? (<Alert key='success' variant='success'> ¡Brand Actualizada! </Alert>) : ""}
      </Modal.Body>
    </Modal>
  </>
  );
}