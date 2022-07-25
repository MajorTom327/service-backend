# Service Backend

## How to start

```shell
yarn
yarn build
yarn dev
```

## How to build

```shell
yarn build
```

## Prisma and postgres

1. Set the `DATABASE_URL` in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run `prisma db pull` to turn your database schema into a Prisma schema.
3. Run `prisma generate` to generate the Prisma Client. You can then start querying your database.
