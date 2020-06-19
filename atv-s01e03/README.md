### Tipos de Sistemas Distribuídos

#### Sistemas de Computação Distribuídos
Os sistemas de computação distribuídos são essenciais para a realização de tarefas de alto desempenho e podem ser divididos em: sistemas de computação de cluster e em grade (ou _grid_).

##### Sistemas de Computação de Cluster
Fundamentalmente, a computação de cluster é homogênea, ou seja, a arquitetura  de hardware consiste em um conjunto de máquinas semelhantes, conectados por uma rede local de alta velocidade, possuindo um único nó gerenciador. Esse modelo foi popularizado especialmente pela sua relação de custo-benefício, considerando o desempenho. 

##### Sistemas de Computação em Grade
Ao contrário da computação de cluster, a computação em grade oferece um alto grau de heterogeneidade. Substancialmente, a computação em grade está mais próxima de um serviço flexível pois assegura a melhora na disponibilidade ao utilizar recursos de diversos locais, garantida por uma organização virtual. Todo usuário pertencente à organização virtual possui direito de acesso aos recursos oferecidos por ela. 

A arquitetura da computação em grade consiste em quatro camadas:
- Camada-base: fornecimento de interfaces
- Camada de Conectividade e Camada de Recursos: protocolos de comunicação/transação e autenticação; e gerenciamento de recursos
- Camada Coletiva: acesso aos recursos
- Camada de Aplicação: a aplicação real da arquitetura em grade em uma organização

#### Sistemas de Informação Distribuídos
Outra categoria essencialmente de sistemas distribuídos é aquela que lida com a interoperabilidade da rede. As soluções encontradas comumente eram baseadas em estruturas em que era mais simples integrar aplicações a um sistema de informações em sistemas empresariais. 

É possível apontar alguns níveis de integração. O nível mais baixo seria aquele que permite que vários clientes enviassem um pacote requisições, em forma de uma única requisição, para execução em uma **transação distribuída**. Como uma transação é uma operação atômica, tem-se que todas (ou nenhuma) transações são executadas. Além da propriedade **atômica**, as transações possuem outras três: **consistência** (não violar invariantes do sistema), **isolamento** (não interferir umas com as outras) e **durabilidade** (gerar alterações permanentes), comumente descritas pela sigla ACID.

O nível mais alto de integração seria o que permitia que as aplicações fossem capazes de se comunicar diretamente umas com as outras, não apenas por meio de requisições e respostas como era feito no sistema anterior. Esse tipo de integração ficou conhecido como **integração de aplicações empresariais**. Essa necessidade de comunicação entre as aplicações deu origem a alguns modelos, tais como: 
1. Chamadas de Procedimento Remoto (RPC)
2. Invocações de Método Remoto (RMI)
3. Middleware Orientado a Mensagem (MOM)

#### Sistemas Distribuídos Pervasivos
Os sistemas distribuídos pervasivos ou ubíquos são provavelmente a maior tendência em sistemas distribuídos atualmente. Essa categoria descreve um arquitetura em que os nós são pequenos, móveis, geralmente conectados através de rede sem fio e normalmente pertencentes a um sistema maior. Um sistema ubíquo sugere que ele é parte integrante do modo de vida das pessoas. No geral, ele dispensa um controle administrativo humano, porém para isso precisam se encaixar automaticamente ao seu ambiente, aceitando os seguintes requisitos:
1. Mudanças de contexto podem acontecer a qualquer momento;
2. Os dispositos serão utilizados por usuários e com finalidades diferentes;
3. A comunicação entre os dispositivos é padronizada.

Alguns exemplos de sistemas distribuídos pervasivos, comumente utilizados em aplicações em internet das coisas, são listados abaixo:
- Sistemas Domésticos
- Sistemas Eletrônicos para Monitoramento de Saúde
- Redes de Sensores

### Middleware
O middleware se apresenta no contexto de sistemas distribuídos como uma camada de software que fornece serviços para permitir a comunicação e o gerenciamento de recursos para aplicativos distribuídos. O objetivo principal da utilização de um middleware é de resolver a necessidade de integração de software. 

Dentre as inúmeras vantagens da utilização de middlewares, estão a facilidade na comunicação entre diferentes tipos de aplicações, além de acesso a tecnologia distintas e melhora no processamento de informações.

#### Exemplos de Middleware
##### 1. [RenderWare](https://www.mobygames.com/game-group/middleware-renderware)
 - Aplicação: fornece gráficos, inteligência artificial e middlewares de áudio para jogos e alguns navegadores VRML. 
 - Linguagem de programação em que foi desenvolvido: C++.
##### 2. [Oracle WebLogic](https://www.oracle.com/br/middleware/weblogic/)
 - Aplicação: permite o reconhecimento de toda infraestrutura utilizada pela Oracle e rodar seus principais produtos.
 - Linguagem de programação em que foi desenvolvido: Java.
##### 3. [IBM WebSphere](https://www.ibm.com/br-pt/cloud/websphere-application-platform).
 - Aplicação: permite a criação e gerenciamento de sites mais sofisticados.
 - Linguagem de programação em que foi desenvolvido: Java.
