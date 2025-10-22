export interface StartupUseCase {
    title: string;
    profile: {
        image: string | null;
        features: string[];
        revenue2024: number; // expressed in milion of euro
        ebitda2024: number; // expressed in milion of euro
        portfolioValue2024: number; // expressed in bilion of euro
        properties: number;
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
