import http from 'k6/http';
import {sleep} from 'k6';

//Base de execução dos testes
export default function(){ 
    http.get('https://test.k6.io'); //executar uma função via http para o endereço especificado
    sleep(1); //segundos em sleep
}


