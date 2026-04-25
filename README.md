# Fintrack 💰

Aplicativo pessoal de controle financeiro construído com React.

## Demo

[fintrack-phi-gilt.vercel.app](https://fintrack-phi-gilt.vercel.app)

## Funcionalidades

- Registro de transações de entrada e saída
- Filtro por categoria
- Resumo automático de saldo, entradas e saídas
- Persistência de dados com localStorage
- Interface dark mode

## Tecnologias

- React + Vite
- CSS puro
- localStorage para persistência

## Como rodar localmente

```bash
npm install
npm run dev
```

## Estrutura de componentes

- `ResumoCard` — cards de resumo financeiro reutilizáveis
- `Filtros` — filtros de categoria com estado ativo
- `ListaTransacoes` — lista filtrada de transações
- `ItemTransacao` — item individual da lista
- `ModalNovaTransacao` — formulário de nova transação