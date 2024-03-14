This is a my note-taking app

## Setup

1. Download Pocketbase from [pocketbase.io](<[pocketbase.io](https://pocketbase.io/)>)
2. Navigate to the unzipped directory
   `cd NAME_OF_THE_DIRECTORY`
3. Start Pocketbase:
   `./pocketbase serve`
4. Open the [Admin UI](http://127.0.0.1:8090/_/), create collection, and update security rules to allow read/write access.
5. Add `experimental: { appDir: true }` to `next.config.js`

## run

run the development server:

```bash
npm run dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see.
```
