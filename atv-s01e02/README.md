## Classificação de Hardware com várias CPUs

Esta síntese apresenta conceitos chave para o entendimento acerca de hardware com múltiplas CPUs, apontando seus conceitos, diferenças e aplicações. No entanto, antes de estudar a arquitetura de máquinas com várias CPUs, é necessário entender o funcionamento de uma máquina com um único processador. 

Os principais elementos da arquitetura de uma máquina com processador único são a CPU, a memória cache e a memória principal. A CPU busca instruções da memória, as decodifica e as executa. Possui unidade de controle, unidade de lógica e aritmética e registradores. A cache é uma memória de acesso rápido que mantém o conteúdo do que foi utilizado recentemente pelo processador. Dessa forma, quando um programa tenta ler um endereço de memória, o processador procura primeiro na cache. 

### Multiprocessadores

Na primeira categoria de hardware com várias CPUs, tem-se os multiprocessadores. Na arquitetura de um **multiprocessador** os processadores e módulos de memória são conectados por meio de uma rede de interconexão. Assim, os processadores compartilham a memória principal, mas cada um tem sua própria memória cache. 

Em multiprocessadores, por exemplo, se dois processadores referenciam diferentes endereços de memória, seus conteúdos ficarão salvos de forma segura em suas respectivas caches. Porém, quando tenta-se acessar o mesmo endereço de memória em dois processadores distintos, pode haver um problema de inconsistência de cache. Ao realizar uma operação de escrita, um dos processadores vai possuir uma informação desatualizada. Para contornar esse problema, cada multiprocessador deve implementar um protocolo que assegure a consistência de cache.

Além disso, pode-se dividir em subcategorias as arquiteturas de multiprocessadores. A primeira subcategoria apresenta multiprocessadores conectados por um único **barramento**. Essa arquitetura foi construída para manter as caches e memórias principais consistentes da mesma forma que estas são mantidas para dispositivos de entrada e saída.

A segunda subcategoria compreende a tentativa de resolver a limitação de largura de banda oferecida pela conexão por um único barramento. Os multiprocessadores conectados por uma rede, ou **multiprocessadores por chaveamento**, são construídos sob duas topologias: _cross bar_ e rede Ômega. Em uma rede _cross bar_ um nó pode se comunicar com qualquer outro em uma passagem pela rede. Em uma rede Ômega, existe uma utilização de hardware reduzida, porém, de acordo com o padrão de comunicação, pode haver contenção entre mensagens.



### Multicomputadores

Na segunda categoria, tem-se os multicomputadores. Existe novamente uma rede de interconexão, porém cada processador tem uma memória exclusiva. Nessa arquitetura, a rede de interconexão garante uma troca de mensagens em vez de operações de escrita e leitura de memória. Cada processador possui sua própria cache e por esses motivos não existem problemas de inconsistência de memória. Tipicamente estão divididos em sistemas por grade ou hipercubos. 
