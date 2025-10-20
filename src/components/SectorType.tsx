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
            <Grid className="animate__animated animate__fadeInLeft" container spacing={3} padding={5}>
                <Grid size={{ xs: 12 }}>
                    <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                        Sector
                    </Typography>
                    <Typography textAlign="center" variant="body2" color="white">
                        Soluzioni su misura per specifiche esigenze del settore, normative e flussi di lavoro, con modelli di dati, integrazioni e flussi di esperienza utente specifici per dominio
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Industrial & Mobility"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Tecnologie che migliorano l'efficienza della produzione, della logistica, dei trasporti e delle operazioni industriali"
                        onVerticalCardClick={() => setSelectedSectorType("industrial-&-mobility")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Consumer Product & Retail"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Innovazioni che migliorano lo sviluppo dei prodotti, le esperienze di vendita al dettaglio e il coinvolgimento dei clienti"
                        onVerticalCardClick={() => setSelectedSectorType("consumer-product-&-retail")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Energy & Resources"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Soluzioni per la produzione di energia, la sostenibilità e l'utilizzo efficiente delle risorse"
                        onVerticalCardClick={() => setSelectedSectorType("energy-&-resources")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Financial Services"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Strumenti che trasformano le operazioni bancarie, assicurative, di investimento e finanziarie"
                        onVerticalCardClick={() => setSelectedSectorType("financial-services")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Government & Infrastructure"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Startup a supporto dei servizi pubblici, della pianificazione urbana e della modernizzazione delle infrastrutture"
                        onVerticalCardClick={() => setSelectedSectorType("government-&-infrastructure")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Health & Life Sciences"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Progressi nell'erogazione dell'assistenza sanitaria, nella diagnostica, nella biotecnologia e nella ricerca medica"
                        onVerticalCardClick={() => setSelectedSectorType("health-&-life-sciences")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Technology, Media & Telecom"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Innovazioni nelle piattaforme digitali, nella creazione di contenuti e nelle reti di comunicazione"
                        onVerticalCardClick={() => setSelectedSectorType("technology-media-&-telecom")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Private Equity"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Soluzioni che facilitano l'analisi degli investimenti, la gestione del portafoglio e l'esecuzione degli accordi"
                        onVerticalCardClick={() => setSelectedSectorType("private-equity")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Education"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Tecnologie che migliorano l'apprendimento, l'insegnamento e l'amministrazione accademica"
                        onVerticalCardClick={() => setSelectedSectorType("education")}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
