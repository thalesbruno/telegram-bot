Este artigo está para vir ao mundo há muito, muito tempo. Não este 'Criando um Bot do Telegram com Node.js'
especificamente, mas este _meu primeiro artigo_, de um modo geral.
Depois de tantos _"Eu ainda não aprendi o suficiente pra fazer um artigo, quando terminar esse curso eu faço"_,
e alguns _"Isso aqui é muito besta, ninguém vai ler um artigo desses"_,
e outros tantos _"Disso aqui já deve ter uns 15 artigos no Medium e 28 vídeos no YouTube"_,
eu simplesmente sentei e comecei a escrever.

Minha inspiração decisiva foi esse também primeiro artigo da Ana Beatriz,
gostei de como ela começou a estudar React.js e já aproveitou a oportunidade pra lançar seu artigo
justamente sobre esse ponta-pé inicial no aprendizado da linguagem.
E realmente é uma baita de uma boa ideia: tem a própria experiência na produção do artigo/conteúdo
(podia ser um vídeo pro YouTube também, por exemplo) que é muito válida,
tem a consolidação do nosso conhecimento adquirido no assunto e que, ao pararmos
pra transformar tudo em um material pra outras pessoas consumirem, por mais simples que seja,
estaremos reforçando, há a chance de se conectar com mais gente que também tenha interesse no assunto ou ajudar alguém que esteja justamente em busca daquele conteúdo (ainda que antes parecesse improvável) e eu acredito que haja ainda muitos outros bons motivos, mas eu quero começar a falar do Bot do Telegram com Node.js...

Bom, criada a coragem de começar, faltava decidir sobre o que tratar no artigo. Resolvi escolher o projeto mais recente que eu implementei,
que foi bem divertido de fazer e tem sido útil também: um Bot do Telegram. Escolhi fazer em Javascript/Node.js porque era a linguagem que eu tava estudando
nos últimos tempos.

A minha motivação ao criar o Bot foi de monitorar alguns dos serviços que ajudo a administrar no meu trampo, mas aqui vou
apresentar o projeto de forma bem genérica para que qualquer um possa aproveitar para algum projeto pessoal, profissional
ou só para praticar e brincar mesmo.

As tecnologias trabalhadas aqui são o Node.js, o Telegraf, que é um framework para construir Bots do Telegram em Node,
o Axios, para o serviço de requisições HTTP e o Docker para fechar com chave de ouro. Ah, quase me esqueço do próprio Telegram, onde vamos iniciar a criação do Bot e vê-lo funcionar.

Acho que um bom ponto de partida é entrarmos no Telegram pra criar nosso Bot. Poucas coisas na vida são mais fáceis que isso: basta procurar pela conta BotFather ao iniciar apertamos em Start ele já nos responde com os comandos que podemos
executar:
