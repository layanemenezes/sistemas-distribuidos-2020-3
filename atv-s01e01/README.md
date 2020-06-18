## Caracterização de Sistemas Distribuídos
### Definição de Sistema Distribuído

Tanenbaum descreve um sistema distribuído como um conjunto de computadores independentes que é visualizado como um único componente independente. A partir desta definição, é possível destacar alguns pontos interessantes, como a composição de um sistema distribuído (um conjunto de várias máquinas, independente de suas configurações) e a abstração para um único sistema que ele proporciona.

Inúmeras aplicações são desenvolvidas atualmente utilizando a arquitetura de sistemas distribuídos, como ferramentas de busca, sistemas financeiros, redes sociais, dentre outras. Esses sistemas comumente possuem máquinas associadas em diversas partes do mundo, o que oferece muitos desafios no que diz respeito à comunicação entre as partes.

### Metas de Sistemas Distribuídos

A principal finalidade de um sistema distribuído é oferecer uma maior facilidade em relação ao acesso a recursos remotos e o controle do seu compartilhamento, tanto em termos de usabilidade quanto às próprias aplicações. O compartilhamento de recursos, uma vez que facilita a colaboração e troca de informações, também requer alguns cuidados relativos à segurança. Dessa forma, são definidas algumas metas para a elaboração de sistemas distribuídos, descritas de forma sucinta a seguir.

#### Transparência
A transferência tem como objetivo a ocultação de que o sistema distribuído é, na verdade, um conjunto de processos e recursos dispostos em vários computadores. Em outras palavras, um **sistema distribuído transparente** é aquele que é apresentado para seus usuários e aplicações como um único sistema. A transparência, por sua vez, pode ser detalhada em alguns tipos, como transparência de acesso, de localização e de migração, estando cada uma destas associada a um aspecto do sistema distribuído.

#### Abertura 
Um **sistema distribuído aberto** é um sistema cujos serviços são oferecidos de acordo com protocolos padrão que os descrevem sintática e semanticamente. Em sistemas distribuídos, os serviços geralmente são descritos por uma **linguagem de definição de interface (IDL)**, por meio de interfaces. As definições escritas em IDLs especificam o serviço de forma sintática, tornando um desafio a especificação semântica dos mesmos. Na prática, estas especificações são feitas utilizando linguagem natural. Quando bem especificada, a definição de uma interface permite que, quando um processo precise da interface, ele possa se comunicar com outro que a fornece, assim como permite que duas aplicações independentes desenvolvam implementações sob essas interfaces, gerando dois sistemas distribuídos independentes com funcionamento similar.

#### Escalabilidade 
A escalabilidade de um sistema diz respeito à sua capacidade de oferecer um serviço de alta qualidade, onde essa qualidade é inerente à possibilidade de adicionar mais recursos ao sistema (ou substituí-los). É necessário pensar em escalabilidade de sistemas em três níveis:
1. Em relação ao seu tamanho: facilidade em adicionar usuários e recursos ao sistema.
2. Em relação à sua localização geográfica: usuários e recursos não precisam estar perto um do outro.
3. Em relação ao seu gerenciamento: facilidade de administrar, ainda que possua alta escalabilidade em relação ao tamanho.

Algumas técnicas são utilizadas para garantir a escalabilidade de um sistema distribuído:
- Ocultar latências de comunicação

Refere-se à construção da aplicação de forma com que a comunicação seja assíncrona, ou seja, que não fique aguardando por resposta. É muito útil em aplicações paralelas, onde os processos independentes podem ser escalonados para execução enquanto outros esperam por mensagens. No entanto, existem aplicações em que não é possível utilizar **comunicação assíncrona**, aplicações interativas, por exemplo. Nesse caso, tenta-se reduzir a comunicação global.

- Distribuição

Consiste em dividir um componente do sistema em partes menores e espalhar essas partes pelo sistema. 

- Replicação

Apresenta-se como uma técnica para resolver o problema do desempenho da aplicação. A replicação de componentes, além de aumentar sua disponibilidade, também ajuda a equilibrar a carga entre eles, o que acaba resultando em uma melhora no desempenho.
