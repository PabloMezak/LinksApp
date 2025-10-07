# linkes
## Descrição
Aplicativo mobile para salvar, organizar e acessar links favoritos por categorias. Permite adicionar, listar e remover links, com armazenamento local usando AsyncStorage.

## Pré-requisitos
- Node.js >= 14
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)
- Emulador Android/iOS ou dispositivo físico

## Instalação
Clone o repositório e instale as dependências:
```bash
git clone https://github.com/seu-usuario/linkes.git
cd linkes
npm install
```

## Scripts
Comandos disponíveis no `package.json`:
```bash
npm run start      # Inicia o Expo
npm run android    # Executa no Android
npm run ios        # Executa no iOS
npm run web        # Executa no navegador
```

## Estrutura de Pastas
```
src/
    app/
        add/           # Tela para adicionar links
        index/         # Tela principal (lista de links)
    components/
        categories/    # Lista de categorias
        input/         # Campo de entrada de texto
        button/        # Botão customizado
    storage/
        link-storage.ts# Funções para salvar/carregar links
    colors/
        colors.ts      # Paleta de cores
```

## Funcionalidades
- **Adicionar Link:** Tela "Add" (`src/app/add/index.tsx`) permite inserir título, URL e categoria.
- **Listar Links:** Tela principal (`src/app/index/index.tsx`) exibe links salvos, filtrando por categoria.
- **Categorias:** Componente `CategoriesList` mostra categorias disponíveis.
- **Entrada e Botão:** Componentes `Input` e `Button` para formulários.
- **Armazenamento:** Links salvos localmente via AsyncStorage (`linkStorage`), persistindo dados entre sessões.
- **Paleta de Cores:** Definida em `src/colors/colors.ts` para padronização visual.

## Como usar
1. Execute o projeto:
     ```bash
     npm run start
     ```
2. Abra no Expo Go (mobile) ou pressione `w` para web.
3. Na tela principal, toque em "Adicionar" para inserir um novo link.
4. Preencha os campos e salve. O link aparecerá na lista.

## Exemplo de uso
Exemplo de JSON salvo no AsyncStorage (chave: `@linkes:links`):
```json
[
    {
        "id": "1",
        "title": "GitHub",
        "url": "https://github.com",
        "category": "Trabalho"
    }
]
```
Os dados ficam armazenados localmente no dispositivo, acessíveis apenas pelo app.

## Testes
_Não há testes automatizados implementados._

## Contribuição
Contribuições são bem-vindas! Abra issues ou pull requests seguindo o padrão do projeto.

## Licença
Distribuído sob a licença MIT.

---
### Seções Opcionais
- **Capturas de tela:** Adicione imagens das telas principais.
- **Badges:** Shields de build, licença, etc.
- **Roadmap:** Planeje futuras funcionalidades.