import { algoA, algoB, buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId = 'capi';


buscarHeroe( heroeId, ( heroe ) => {
    console.log( heroe );                       
})


console.log('Fin del programa');