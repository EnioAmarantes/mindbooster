# mindbooster
Projeto de flashcards para obtenção de nota para a disciplina de Programação Mobile do curso de Engenharia de Software da Universidate Tecnológica Federal do Paraná


# Especificação do projeto – parte 1 (P1)

Flashcards são cartões utilizados para a memorização. Cada cartão possui dois lados. Um lado contém uma pergunta e o outro, a resposta. Geralmente, os flashcards são organizados em coleções de diferentes assuntos.

Para usar um flashcard, sugere-se seguir os seguintes passos:

1. Ler a pergunta (contida na frente do cartão);
2. Responder a pergunta. A resposta pode ser escrita, verbal ou mental;
3. Vire o cartão para verificar se a resposta está correta;
4. Caso tenha acertado, coloque a carta em uma pilha de acertos. Caso tenha errado, coloque a carta em uma pilha de erros;
5. Ao finalizar os cartões, contabilize quantos acertos e erros houveram. Após uma pausa de aproximadamente 30 minutos, se avalie novamente.

# A avaliação deste projeto será realizada por meio dos critérios de avaliação listados abaixo:

1. Critério 1 (1,5) – Elaboração de todas as telas do aplicativo. Cada tela deve conter os elementos apresentados no protótipo;
1. Critério 2 (1,5) – Criação de componentes para: (a) cartão para representar uma coleção; (b) cartão para representar um flashcard; (c) cartão da interface de cadastro de flashcard;
1. Critério 3 (1,0) – Interação com cliques de cada componente e navegação entre telas (considerando todos os elementos de interface);
1. Critério 4 (1,0) – Barra lateral de navegação (DrawerNavigator);
1. Critério 5 (1,0) – Cadastro de usuário utilizando Firebase Authentication;
1. Critério 6 (1,0) – Login de usuário usando o Firebase Authentication. Caso o login seja válido, deve-se redirecionar para a tela “Minhas coleções”;
1. Critério 7 (1,0) – Dados devem ser inicializados diretamente no código-fonte ou carregados a partir de um arquivo JSON;
1. Critério 8 (1,0) – A paleta de cores aplicada no aplicativo segue o esquema de cores do protótipo;
1. Critério 9 (0,5) – (Tela de cadastro de usuário) – Caso o valor digitado no campo “Senha” for diferente do campo “Repetir senha”, deve-se mostrar um rótulo “Senha não confere” em cor vermelha logo abaixo do campo “Repetir senha”;
1. Critério 10 (0,5) – (Tela de login) – Caso o e-mail não for válido, exibir o rótulo de mensagem (em vermelho) "E-mail inválido" logo abaixo do campo de texto "E-mail".

## Exemplos:
- joaofernando@viagemprasaturno.com.br (válido)
- joaofernando@ (inválido)
- @viagemprasaturno.com.br (inválido)
- clodoaldo@saturno (inválido)