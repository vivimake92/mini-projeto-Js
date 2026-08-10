# Mini-projeto avaliativo - Vivian Martins do Santos

Este documento descreve o Mini-Projeto Avaliativo da turma de Programação Front-End
React - JavaScript

## O que o sistema faz e para que serve ?

A proposta do projeto é criar um sistema simples que compare as habilidades de uma pessoa
candidata com os requisitos de algumas vagas fictícias de front-end júnior.

## Como executá-lo ?

O método indicado é utilizar o app *Visual Studio Code*, com a extensão *code runner*.
- Copie o link HTTPS do projeto diretamente na página do GitHub clicando no botão verde Code.
- Abra o Visual Studio Code no computador.
- Pressione as teclas Ctrl + Shift + P (ou Cmd + Shift + P no Mac) para abrir a Paleta de Comandos.
- Digite e selecione a opção Git: Clone.
- Cole a URL do repositório copiada do GitHub e aperte Enter.
- Escolha uma pasta no seu computador onde o projeto será salvo.
- Clique em Open (Abrir) na notificação que aparece no canto inferior direito para começar a usar o projeto.
- Com o código aberto, agora basta cliclar no símbolo de *play* na parte superior direita do *VS Code* ou pressionar Ctrl + alt + N . 

## Qual regra de cálculo de compatibilidade eu utilizei no projeto ?

Para avaliação do percentual de compatibilidade, eu criei um sistema de pontos que soma pontos ao comparar as habilidades exigidas com a lista de requisitos, e então ele retorna a seguinte operação:

_`(pontos / vaga.listaRequisitos.length) * 100)`_

Apesar das diversas opções ao criar o método para calcular a compatibilidade, eu escolhi este por ter bons exemplos nos históricos das aulas.

## Qual critério eu utilizei para indicar as habilidades na recomendação de estudo ?

Aproveitando a parte do código que percorre cada vaga da questão anterior, criei um array que armazena as habilidades faltantes e apenas criei uma estrutura de decisão *if* para imprimir algo para cada habilidade faltante.

## Quais conceitos do Módulo01 do curso eu apliquei ao projeto ?

Eu criei uma checklist antes de começar o projeto e, conforme o projeto estava sendo desenvolvido, eu fui marcando check nos conceitos utilizados. Alguns exemplos: arrays, objetos, let/const, operadores lógicos, if/else, funções, arrow functions, métodos de array, classe, constructor, herança, this, callback, promise, async/await, etc...

## O que é a arquitetura cliente-servidor e como ela aparece em meu projeto ?

A arquitetura cliente-servidor é um modelo de projeto de rede que divide as tarefas entre clientes, servidores e uma rede. O cliente faz pedidos de dados ou serviços, e o servidor processa esses pedidos e devolve a resposta.
Em meu projeto, esta arquitetura está representada como uma simulação de resposta de um servidor que encontra uma nova vaga e, após alguns segundos, retorna para o cliente detalhes da nova vaga.

## Uso de IA durante o desenvolvimento

Durante o processo, conforme eu desenvolvia o código, eu ia utilizando o console.log para imprimir as informações que eu precisava trabalhar e foram surgindo alguns comportamentos indesejados como: imprimir mais de um resultado para cada vaga no console, não imprimir o resultado esperado, além de alguns erros de syntax. O uso da IA me ajudou a identificar onde estavam e a entender o por que desses comportamentos, que não eram necessariamente erros, mas estavam na seção errada do código e por isso estavam imprimindo algo indesejado.

## Links

- [KanBan Trello](https://trello.com/b/qdEh937s/meu-primeiro-trello-mini-projeto)
- [Link do vídeo explicativo]()
- [Lista de pull requests](https://github.com/vivimake92/mini-projeto-Js/pulls?q=is%3Apr+is%3Aclosed)
- [Lista de Branches](https://github.com/vivimake92/mini-projeto-Js/branches)