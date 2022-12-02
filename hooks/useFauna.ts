"use client";
import faunadb from "faunadb";

const db = faunadb;

export const client = new faunadb.Client({
  secret: process.env.secret,
});

export default db;
