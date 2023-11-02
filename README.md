# performance-tests-k6

### Primeiros scripts de testes de performance utilizando o k6. 

As anotações abaixo foram realizadas conforme desenvolvimento dos estudos do funcionamento da ferramenta.

Para executar o script de testes adicionando usuários virtuais, é preciso passar as flags –vus, informando o número de usuários virtuais e -duration, especificando logo em seguida o tempo  de duração em segundo. Exemplo:

```
docker run --rm -i -v ${PWD}/scripts:/scripts grafana/k6 run --vus 10 --duration 30s /scripts/script.js
```

Os resultados dos testes de performance, realizados em uma máquina pessoal, ficam limitados a essa máquina, caso seja necessário confirmar que os testes podem ser extrapolados para outro ambiente, é preciso realizá-los em outro ambiente.
