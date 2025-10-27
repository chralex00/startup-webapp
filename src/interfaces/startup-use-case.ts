export interface StartupUseCase {
    title: string;
    companyName: string;
    profile: {
        image: string | null;
        features: string[];
        revenue2024: number; // expressed in milion of euro
        ebitda2024: number; // expressed in milion of euro
        portfolioValue2024: number | null; // expressed in bilion of euro
        properties: number | null;
    };
    criticalIssues: {
        image: string | null;
        title: string;
        features: string[];
        // to do
    };
    help: {
        image: string | null;
        features: {
            title: string;
            description: string;
        }[];
    };
}
