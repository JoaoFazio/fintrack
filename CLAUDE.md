# Fintrack — Contexto do Projeto

## O que é
App pessoal de controle financeiro em React.
Página única, sem rotas, sem backend, sem autenticação.

## Stack
- React + Vite
- CSS puro
- localStorage para persistência

## Estrutura de componentes
- `ResumoCard` — card reutilizado 3x com props (saldo, entradas, saídas)
- `Filtros` — chips de categoria para filtrar a lista
- `ListaTransacoes/ListaTransacoes` — lista de transações filtrada
- `ListaTransacoes/ItemTransacao` — item individual da lista
- `ModalNovaTransacao` — modal de formulário para nova transação

## Onde o estado vive
- `transacoes[]` — vive no App (compartilhado entre Filtros, Lista e Modal)
- `categoriaSelecionada` — vive em ListaTransacoes (local)
- `modalAberto` — vive no App (controla exibição do Modal)

## Estrutura de uma transação
{
  id: crypto.randomUUID(),
  descricao: string,
  valor: number,
  tipo: "entrada" | "saida",
  categoria: "Alimentação" | "Lazer" | "Transporte" | "Compras" | "Outros",
  data: string (ISO)
}

## Design
- Dark mode — fundo #0F0F0F
- Verde #10B981 para entradas
- Vermelho #F43F5E para saídas
- Fontes: Manrope (headlines) + Inter (body)

## Categorias fixas
Alimentação, Lazer, Transporte, Compras, Outros

## Fora do escopo
- Rotas
- Login
- Backend
- Gráficos
- Metas por categoria