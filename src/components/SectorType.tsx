"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ExtendedCard from "./ExtendedCard";

export interface SectorTypeProps {
    setSelectedSectorType: (
        type:
            | "industrial-&-mobility"
            | "consumer-product-&-retail"
            | "energy-&-resources"
            | "financial-services"
            | "government-&-infrastructure"
            | "health-&-life-sciences"
            | "technology-media-&-telecom"
            | "private-equity"
            | "education"
    ) => void;
}

export default function SectorType({ setSelectedSectorType }: SectorTypeProps) {
    return (
        <Box sx={{ backgroundColor: "#2E2E38" }}>
            <Box sx={{ mx: "auto", maxWidth: "1350px", marginTop: -0 }}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} paddingBottom={10}>
                    <Grid size={{ xs: 12 }}>
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "25px",
                                    sm: "35px",
                                    md: "auto",
                                    lg: "auto",
                                },
                            }}
                            textAlign="center"
                            variant="h4"
                            fontWeight="bold"
                            color="white"
                        >
                            Soluzioni Settoriali
                        </Typography>
                        <Typography textAlign="center" variant="body2" color="white" marginX={3}>
                            Piattaforme e strumenti dedicati a particolari industrie
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Industrial & Mobility"
                            image="/images/industrial-mobility.png"
                            description="Tecnologie che migliorano l'efficienza della produzione, della logistica, dei trasporti e delle operazioni industriali"
                            onVerticalCardClick={() => setSelectedSectorType("industrial-&-mobility")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Consumer Product & Retail"
                            image="/images/customer-product-retail.png"
                            description="Innovazioni che migliorano lo sviluppo dei prodotti, le esperienze di vendita al dettaglio e il coinvolgimento dei clienti"
                            onVerticalCardClick={() => setSelectedSectorType("consumer-product-&-retail")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Energy & Resources"
                            image="/images/energy-resources.png"
                            description="Soluzioni per la produzione di energia, la sostenibilità e l'utilizzo efficiente delle risorse"
                            onVerticalCardClick={() => setSelectedSectorType("energy-&-resources")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Financial Services"
                            image="/images/financial-services.png"
                            description="Strumenti che trasformano le operazioni bancarie, assicurative, di investimento e finanziarie"
                            onVerticalCardClick={() => setSelectedSectorType("financial-services")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Government & Infrastructure"
                            image="/images/government-infrastructure.png"
                            description="Startup a supporto dei servizi pubblici, della pianificazione urbana e della modernizzazione delle infrastrutture"
                            onVerticalCardClick={() => setSelectedSectorType("government-&-infrastructure")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Health & Life Sciences"
                            image="/images/health-life-sciences.png"
                            description="Progressi nell'erogazione dell'assistenza sanitaria, nella diagnostica, nella biotecnologia e nella ricerca medica"
                            onVerticalCardClick={() => setSelectedSectorType("health-&-life-sciences")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Technology, Media & Telecom"
                            image="/images/technology-media-telecom.png"
                            description="Innovazioni nelle piattaforme digitali, nella creazione di contenuti e nelle reti di comunicazione"
                            onVerticalCardClick={() => setSelectedSectorType("technology-media-&-telecom")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Private Equity"
                            image="/images/private-equity.png"
                            description="Soluzioni che facilitano l'analisi degli investimenti, la gestione del portafoglio e l'esecuzione degli accordi"
                            onVerticalCardClick={() => setSelectedSectorType("private-equity")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Education"
                            image="/images/education.png"
                            description="Tecnologie che migliorano l'apprendimento, l'insegnamento e l'amministrazione accademica"
                            onVerticalCardClick={() => setSelectedSectorType("education")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
