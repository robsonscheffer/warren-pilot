# Desafio técnico Warren

Opa, blz? Que bom que vc está lendo o _README_ ;)

Este projeto foi criado com uma arquitetura de monorepo, usando lerna e workspaces.

Para rodar...

`yarn && yarn bootstrap`

##### @warren/suitability

O projeto `suitability` foi criado usando _NextJS_

O NextJS foi escolhido por familiaridade, já que tenho usado ele nos últimos dois anos.

Uma evolução ele poderia fazer um papel de proxy/gateway pra `API`

https://nextjs.org/

Na raiz do repositório rode

```
yarn dev:suitability
```

##### @warren/ui

O projeto UI foi criado pra ser distribuido como um pacote de UI global da organização, com React e Styled Components, ainda usei uma lib que acho incrível pra criar projetos que tenham similariedade com design system, usei a _styled-system_

Nesse projeto não adicionei o Redux, sagas, etc. Penso que ele não deva conhecer o gerenciamento de estado, isso pode gerar muito acoplamento.

- https://styled-components.com/
- https://styled-system.com/

Pra rodar o _UI_ com Storybook

Na raiz do repositório rode

```
yarn dev:ui
```

Para subir todos os pacotes ao mesmo tempo rode na raíz

`lerna run dev --parallel` ou `yarn dev`

##### ROADMAP

- Exportar módulo do pacote de _@warren/ui_
- Resolver algumas questões de performance do styled-components
- Tratamento de erros de API, criar ErrorBoundaries no UI pra gerir.
- Separar chamadas de API em um novo pacote _@warren/api_
- Testes geral de _unit_ e _e2e_ :(
- Melhorar o transform de dados da API.
- Microanimações e microinterações em componetens.

> Aprendi bastante fazendo novamente essa arquitetura, gosto da liberdade que dá, mesmo sofrendo em alguns momentos com _lerna_ (quem nunca?)
> Não gostei de codar sozinho :(, a colaboração é essencial pra criatividade.
> Você verá algumas menções para _Senhor dos anéis_ como "loren ipsum"
