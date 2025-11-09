export type HeirType =
  | "ibu"
  | "bapa"
  | "isteri"
  | "suami"
  | "anakLelaki"
  | "anakPerempuan"
  | "saudaraSIBL"
  | "saudaraSBL"
  | "saudaraSIL"
  | "saudaraSIBP"
  | "saudaraSBP"
  | "saudaraSIP"
  | "datuk"
  | "nenekBapa"
  | "nenekIbu"
  | "cucuLelaki"
  | "cucuPerempuan";

export interface HeirShare {
  name: string;
  relationship: string;
  percentage: number;
  amount: number;
}

export interface CalculationResult {
  shares: HeirShare[];
  total: number;
}
