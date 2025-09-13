import './modern-normalize.css';
import './style.css';
import { fetchData } from './fetchData';

fetchData('syndey').then((weather) => console.log(weather));
