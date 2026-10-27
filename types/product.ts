export interface Drug {
  id: string;
  name: string;
  latin_name: string;
  active_substance: string;
  category: string;
  form: string;
  dosage: string;
  manufacturer: string;
  prescription_required: boolean;
  description: string;
  stock: number;
}

// Совместимость со старым кодом, который ссылается на Product/Medicine
export type Product = Drug;
export type Medicine = Drug;

export interface CartLine {
  product: Drug;
  quantity: number;
}