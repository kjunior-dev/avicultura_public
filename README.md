# Nôs Ovu — site público

Landing page independente em Next.js (App Router), Tailwind CSS 4 e Button de shadcn/ui. Não precisa de autenticação para abrir. Os botões encaminham para as rotas existentes de `avicultura_management`: `/cliente` para encomendar e `/login` para a administração.

## Executar

```sh
cd avicultura_public
npm install
cp .env.example .env.local
npm run dev
```

Abra http://localhost:3001. Execute também a administração em http://localhost:3000 e a respetiva API para enviar pedidos. O site público utiliza o formulário existente, incluindo acompanhamento por link privado.

## Publicar

Importe esta pasta como um projeto Next.js independente, por exemplo na Vercel. Configure `MANAGEMENT_URL` com a origem HTTPS pública da administração, sem caminhos (exemplo: `https://gestao.seu-dominio.cv`). Esta variável é usada no servidor e precisa estar definida durante o build. Em produção, o build falha se faltar a configuração, para evitar botões a apontar para localhost.

```sh
npm run typecheck
npm run build
npm start
```

A ilustração interativa usa SVG e Motion, sem imagens ou fontes externas. Três toques no ovo fazem nascer um pintainho; o botão “chocar outro ovo” reinicia a cena. As animações respeitam a preferência por movimento reduzido. O conteúdo não publica preços, disponibilidade ou promessas de entrega: esses detalhes são tratados no pedido.

A secção de avaliações lê apenas avaliações aprovadas da API, através da origem `MANAGEMENT_URL` e do proxy `/api/v1/client-portal/reviews` da aplicação de gestão. A leitura é feita no servidor a cada pedido, sem cache, com timeout de 5 segundos. Uma falha mostra uma mensagem na secção e preserva o resto da página; não há testemunhos fictícios de substituição.

Com uma a três avaliações, apresenta uma grelha. Com quatro ou mais, apresenta duas faixas animadas, que pausam apenas pelo botão. A preferência por movimento reduzido mantém uma grelha estática. Cada cartão mostra estrelas, comentário, nome abreviado e localidade opcional; os dados privados do pedido não são publicados.

Os clientes avaliam na aplicação de gestão, pelo link privado do pedido, após a entrega. A equipa aprova ou rejeita em `/avaliacoes`. Atualize primeiro a BD e a API, depois a gestão e este site; consulte as instruções de migração no README da API.
