"use client";
import { notFound } from "next/navigation";

import db, { client } from "hooks/useFauna";

export default async function GetProduct(ProductSlug: string) {
  try {
    const { Get, Match, Index } = db.query;
    const res: any = await client.query(
      Get(Match(Index("product_by_slug"), ProductSlug))
    );
    return res.data;
  } catch (error) {
    notFound();
  }
}
