"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ExtendedCard from "./ExtendedCard";

export interface CoreOperationsTypeProps {
    setSelectedCoreOperationType: (type: "finance" | "hr-&-people-ops" | "legal-&-compliance" | "it-&-infrastructure") => void;
}

export default function CoreOperationsType({ setSelectedCoreOperationType }: CoreOperationsTypeProps) {
    return (
        <Box sx={{ backgroundColor: "#2E2E38" }}>
            <Box sx={{ mx: "auto", maxWidth: "1350px", marginTop: -0 }}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} paddingBottom={10}>
                    <Grid size={{ xs: 12 }}>
                        <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                            Core Operations
                        </Typography>
                        <Typography textAlign="center" variant="body2" color="white">
                            Si riferisce alle attività fondamentali e imprescindibili che generano
                            valore e sostengono il funzionamento del business. Sono i processi
                            centrali che permettono all&apos;azienda di erogare i propri prodotti o
                            servizi e di raggiungere gli obiettivi strategici
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                        <ExtendedCard
                            title="Finance"
                            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072"
                            description="Gestisce budget, contabilità e pianificazione finanziaria per garantire la solidità finanziaria"
                            onVerticalCardClick={() => setSelectedCoreOperationType("finance")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                        <ExtendedCard
                            title="HR & People Ops"
                            image="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                            description="Gestisce le assunzioni, il coinvolgimento dei dipendenti, la formazione e lo sviluppo della forza lavoro"
                            onVerticalCardClick={() => setSelectedCoreOperationType("hr-&-people-ops")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                        <ExtendedCard
                            title="Legal & Compliance"
                            image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                            description="Garantisce il rispetto delle normative, gestisce i contratti e mitiga i rischi organizzativi"
                            onVerticalCardClick={() => setSelectedCoreOperationType("legal-&-compliance")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                        <ExtendedCard
                            title="IT & Infrastructure"
                            image="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1686"
                            description="Supporta i sistemi tecnologici, le reti e la sicurezza informatica in tutta l'organizzazione"
                            onVerticalCardClick={() => setSelectedCoreOperationType("it-&-infrastructure")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
