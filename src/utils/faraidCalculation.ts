import type { HeirType, CalculationResult, HeirShare } from "@/types/faraid";

const heirNames: Record<HeirType, string> = {
  ibu: "Ibu",
  bapa: "Bapa",
  isteri: "Isteri",
  suami: "Suami",
  anakLelaki: "Anak Lelaki",
  anakPerempuan: "Anak Perempuan",
  saudaraSIBL: "Saudara Seibu Sebapa Lelaki",
  saudaraSBL: "Saudara Sebapa Lelaki",
  saudaraSIL: "Saudara Seibu Lelaki",
  saudaraSIBP: "Saudara Seibu Sebapa Perempuan",
  saudaraSBP: "Saudara Sebapa Perempuan",
  saudaraSIP: "Saudara Seibu Perempuan",
  datuk: "Datuk",
  nenekBapa: "Nenek dari Bapa",
  nenekIbu: "Nenek dari Ibu",
  cucuLelaki: "Cucu Lelaki",
  cucuPerempuan: "Cucu Perempuan",
};

const heirRelationships: Record<HeirType, string> = {
  ibu: "Mother",
  bapa: "Father",
  isteri: "Wife",
  suami: "Husband",
  anakLelaki: "Son",
  anakPerempuan: "Daughter",
  saudaraSIBL: "Full Brother",
  saudaraSBL: "Paternal Half-Brother",
  saudaraSIL: "Maternal Half-Brother",
  saudaraSIBP: "Full Sister",
  saudaraSBP: "Paternal Half-Sister",
  saudaraSIP: "Maternal Half-Sister",
  datuk: "Grandfather",
  nenekBapa: "Paternal Grandmother",
  nenekIbu: "Maternal Grandmother",
  cucuLelaki: "Grandson",
  cucuPerempuan: "Granddaughter",
};

/**
 * Simplified Faraid calculation based on basic Islamic inheritance rules
 * This is a basic implementation and should be validated by Islamic scholars for production use
 */
export function calculateFaraid(heirs: HeirType[], totalEstate: number): CalculationResult {
  const shares: HeirShare[] = [];
  let totalShares = 0;

  // Basic calculation logic (simplified)
  // In a real implementation, this would follow complex Islamic jurisprudence rules

  const hasSons = heirs.includes("anakLelaki");
  const hasDaughters = heirs.includes("anakPerempuan");
  const hasSpouse = heirs.includes("isteri") || heirs.includes("suami");
  const hasMother = heirs.includes("ibu");
  const hasFather = heirs.includes("bapa");

  heirs.forEach((heir) => {
    let percentage = 0;

    switch (heir) {
      case "suami":
        // Husband gets 1/4 if there are children, otherwise 1/2
        percentage = hasSons || hasDaughters ? 25 : 50;
        break;

      case "isteri":
        // Wife gets 1/8 if there are children, otherwise 1/4
        percentage = hasSons || hasDaughters ? 12.5 : 25;
        break;

      case "ibu":
        // Mother gets 1/6 if there are children or siblings, otherwise 1/3
        percentage = hasSons || hasDaughters ? 16.67 : 33.33;
        break;

      case "bapa":
        // Father gets 1/6 if there are sons, otherwise residuary
        percentage = hasSons ? 16.67 : 20;
        break;

      case "anakLelaki":
        // Sons share remaining estate with daughters (2:1 ratio)
        percentage = 15; // Simplified - would be calculated as residuary
        break;

      case "anakPerempuan":
        // Daughters get half of what sons get
        percentage = 7.5; // Simplified - would be calculated based on number of daughters
        break;

      case "datuk":
        percentage = hasFather ? 0 : 16.67;
        break;

      case "nenekBapa":
      case "nenekIbu":
        percentage = hasMother ? 0 : 8.33;
        break;

      case "cucuLelaki":
        percentage = hasSons ? 0 : 10;
        break;

      case "cucuPerempuan":
        percentage = hasSons || hasDaughters ? 0 : 5;
        break;

      default:
        // Secondary heirs
        percentage = hasSons ? 0 : 8.33;
    }

    if (percentage > 0) {
      totalShares += percentage;
      shares.push({
        name: heirNames[heir],
        relationship: heirRelationships[heir],
        percentage,
        amount: (totalEstate * percentage) / 100,
      });
    }
  });

  // Normalize if total shares exceed 100%
  if (totalShares > 100) {
    shares.forEach((share) => {
      share.percentage = (share.percentage / totalShares) * 100;
      share.amount = (totalEstate * share.percentage) / 100;
    });
  }

  const total = shares.reduce((sum, share) => sum + share.amount, 0);

  return { shares, total };
}
