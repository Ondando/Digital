'use client';
import { notFound } from 'next/navigation';

import { FaunaClient, DB } from 'database';

export default async function GetProduct(ProductSlug: string) {
    try {
        const { Get, Match, Index } = DB.query;
        const res: any = await FaunaClient.query(Get(Match(Index('product_by_slug'), ProductSlug)));
        return res.data;
    } catch (error) {
        notFound();
    }
}
