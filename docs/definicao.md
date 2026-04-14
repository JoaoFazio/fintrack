# Fintrack — Definição do Projeto

## O que é

Aplicativo pessoal de controle financeiro. Registra entradas e saídas, categoriza transações e exibe um resumo mensal.

---

## Contexto do usuário

- **Entradas fixas:** R$ 2.200/mês (pensão R$ 1.000 + bolsa LabMulti R$ 1.200)
- **Principais gastos:** iFood, mercado, padaria, passeio, RU, compras online

---

## Escopo — O que o app faz

- Registrar transações (entrada ou saída)
- Listar transações com filtro por categoria
- Resumo do mês: total entrado, total saído, saldo atual
- Persistência local (dados salvos no navegador via localStorage)

## Fora do escopo (por enquanto)

- Metas por categoria
- Comparação entre meses
- Gráficos
- Login / autenticação
- Backend / API externa

---

## Estrutura de uma transação

| Campo | Tipo | Exemplo |
|---|---|---|
| Descrição | Texto | "iFood sexta" |
| Valor | Número | 45.90 |
| Tipo | `entrada` ou `saida` | saida |
| Categoria | Lista fixa | Alimentação |
| Data | Data | 2025-04-13 |

---

## Categorias (fixas)

- Alimentação
- Lazer
- Transporte
- Compras
- Outros

---

## Stack

- React + Vite
- CSS puro (sem framework)
- localStorage para persistência

---

## Próximos passos

- [ ] Prototipação de telas (Stitch)
- [ ] Desenvolvimento
- [ ] Deploy + CI/CD
