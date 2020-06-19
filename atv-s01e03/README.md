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

O nível mais alto de integração seria o que permitia que as aplicações fossem capazes de se comunicar diretamente umas com as outras, não apenas por meio de requisições e respostas como era feito no sistema anterior. Esse tipo de integração ficou conhecido como **integração de aplicações empresariais**. Essa necessidade de comunicação entre as aplicações deu origem a dois modelos: 
1. Chamadas de Procedimento Remoto (RPC)
2. Invocações de Método Remoto (RMI)
3. Middleware Orientado a Mensagem (MOM)

#### Sistemas Distribuídos Pervasivos
Os sistemas distribuídos pervasivos ou ubíquos são provavelmente a maior tendência em sistemas distribuídos atualmente. Essa categoria descreve um arquitetura em que os nós são pequenos, móveis, geralmente conectados através de rede sem fio e normalmente pertencentes a um sistema maior.

### Middleware


#### Exemplos de Middleware
##### 1. Nome do middleware.
 - Aplicação (para que serve ele exatamente?).
 - Linguagem de programação em que foi desenvolvido.
##### 2. Nome do middleware.
 - Aplicação (para que serve ele exatamente?).
 - Linguagem de programação em que foi desenvolvido.
##### 3. Nome do middleware.
 - Aplicação (para que serve ele exatamente?).
 - Linguagem de programação em que foi desenvolvido.
