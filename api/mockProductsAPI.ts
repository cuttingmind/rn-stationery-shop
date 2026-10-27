import data from '../mocks/db.json';
import { Drug } from '../types/product';

const DELAY_MS = 600;

const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export async function fetchProducts(): Promise<Drug[]> {
  await delay(DELAY_MS);
  return data.drugs as Drug[];
}

export async function fetchProductById(id: string): Promise<Drug | undefined> {
  await delay(DELAY_MS);
  return (data.drugs as Drug[]).find((p) => p.id === id);
}