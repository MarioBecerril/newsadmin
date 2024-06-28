import axios from 'axios';
import ConfigAxios from './ConfigAxios';

const getAllNews = (dataSearch) => {
  return axios.get('/api/wp-json/wp/v2/posts?category=noticias&per_page=10');  
};

const getNewById = dataClientId => {
  let {APIFIXSO, options} = ConfigAxios();
  return axios.get(APIFIXSO + '/news/code/' + dataClientId, options);
};

const createNew = dataClient => {
  let {APIFIXSO, options} = ConfigAxios();
  return axios.post(APIFIXSO + '/news', dataClient, options);
};

const updateNew = (dataClient, dataClientId) => {
  let {APIFIXSO, options} = ConfigAxios();
  return axios.put(APIFIXSO + '/news/' + dataClientId, dataClient, options);
};

const deleteNew = dataClientId => {
  let {APIFIXSO, options} = ConfigAxios();
  return axios.delete(APIFIXSO + '/news/code/' + dataClientId, options);
};


const ClientCrudService = {
  getAllNews,
  getNewById,
  createNew,
  updateNew,
  deleteNew,
};

export default ClientCrudService;