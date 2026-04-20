# GeoQueryAI

1. Entrar a server i instala dependencies:

```bash
cd server
npm install
```

2. Crear `server/.env`:

```env
NODE_PORT=5000
OPENAI_API_KEY="TU_API_KEY"
```

3. Aixecar server:

```bash
cd server
npm run dev
```

4. Transpilar frontend TS:

```bash
cd client
npx tsc -p tsconfig.json
```

5. Obrir frontend amb LiveServer al port 5500:

`client/public/index.html`

`http://127.0.0.1:5500/client/public/`
