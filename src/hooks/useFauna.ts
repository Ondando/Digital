"use client";
import faunadb from "faunadb";

const db = faunadb;

export const client = new faunadb.Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_SECRET!,
});

export default db;
