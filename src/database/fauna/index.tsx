import faunadb from 'faunadb';

const db = faunadb;

export const DB = db;
export const FaunaClient = new faunadb.Client({
    secret: process.env.NEXT_PUBLIC_FAUNA_SECRET || '',
});

export function useFauna(): void {
    console.log('deu');
}
