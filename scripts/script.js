import http from 'k6/http';
import {sleep} from 'k6';

//definindo no próprio script, a quantidade de usuários virtuais e duração
export const options = {
    vus:7,
    duration: '27s'

}

//Base de execução dos testes
export default function(){ 
    http.get('https://test.k6.io'); //executar uma função via http para o endereço especificado
    sleep(1); //segundos em sleep
}


