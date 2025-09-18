import './modern-normalize.min.css';
import './style.css';
import { searchListeners } from './processData';
import { togglesListeners, retrieveStorage } from './togglesHandler';

retrieveStorage();
searchListeners();
togglesListeners();
