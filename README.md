# performance-tests-k6

### Primeiros scripts de testes de performance utilizando o k6. 

As anotações abaixo foram realizadas conforme desenvolvimento dos estudos do funcionamento da ferramenta.

Para executar o script de testes adicionando usuários virtuais, é preciso passar as flags –vus, informando o número de usuários virtuais e -duration, especificando logo em seguida o tempo  de duração em segundo. Exemplo:

```
docker run --rm -i -v ${PWD}/scripts:/scripts grafana/k6 run --vus 10 --duration 30s /scripts/script.js
```

