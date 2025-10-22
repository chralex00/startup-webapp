import { StartupUseCase } from "./startup-use-case";

export interface Startup {
    // General Info
    id: number;
    name: string;
    description: string;
    hqCity: string;
    hqRegion: string;
    website: string;
    image: string;

    // Filtering Info
    vertical: string | null;
    verticalSubtype: string | null;
    horizontal: string | null;
    sectors: string | null;

    // Relevance for EY Services
    assurance: boolean | null;
    useCaseAssurance: string | null;
    eySubteamAssurance: string | null;
    tax: boolean | null;
    useCaseTax: string | null;
    eySubteamTax: string | null;
    consulting: boolean | null;
    useCaseConsulting: string | null;
    eySubteamConsulting: string | null;
    strategyAndTransaction: boolean | null;
    eySubteamSat: string | null;
    eyNotesSat: string | null;

    // Financial Data
    totalRaisedToDate: number | null;
    stage: string | null;
    lastDealDate: string | null;
    aidaEbitda2022: string | null; // in M $ (Milion of Dollars)
    aidaRevenue2022: string | null; // in M $ (Milion of Dollars)
    aidaEbitda2023: string | null; // in M $ (Milion of Dollars)
    aidaRevenue2023: string | null; // in M $ (Milion of Dollars)
    aidaEbitda2024: string | null; // in M $ (Milion of Dollars)
    aidaRevenue2024: string | null; // in M $ (Milion of Dollars)
    ebitdaCagr2022To2024: string | null; // in % (Percentage)

    // Additional Info
    numberOfEmplyees: number | null;
    mainClients: string | null;
    dataResidency: string | null;
    securityPrivacy: string | null;
    pricingModel: string | null;
    potentialSinergiesWithEy: string | null;

    // Scores
    fitWithEyServices: number | null;
    enterpriseFit: number | null;
    securityFit: number | null;
    economicFit: number | null;
    priorityScore: number | null;

    // Use Case
    useCase?: StartupUseCase | null;
}
