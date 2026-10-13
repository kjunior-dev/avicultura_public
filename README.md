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

A ilustração dos ovos é feita em CSS e não depende de imagens ou fontes externas. O conteúdo não publica preços, disponibilidade ou promessas de entrega: esses detalhes são tratados no pedido.
