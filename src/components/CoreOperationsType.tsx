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
                            Si riferisce alle attività fondamentali e imprescindibili che generano valore e sostengono il funzionamento del
                            business. Sono i processi centrali che permettono all&apos;azienda di erogare i propri prodotti o servizi e di
                            raggiungere gli obiettivi strategici
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                        <ExtendedCard
                            title="Finance"
                            image="/images/finance.png"
                            description="Gestisce budget, contabilità e pianificazione finanziaria per garantire la solidità finanziaria"
                            onVerticalCardClick={() => setSelectedCoreOperationType("finance")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                        <ExtendedCard
                            title="HR & People Ops"
                            image="/images/hr-people-ops.png"
                            description="Gestisce le assunzioni, il coinvolgimento dei dipendenti, la formazione e lo sviluppo della forza lavoro"
                            onVerticalCardClick={() => setSelectedCoreOperationType("hr-&-people-ops")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                        <ExtendedCard
                            title="Legal & Compliance"
                            image="/images/legal-compliance.png"
                            description="Garantisce il rispetto delle normative, gestisce i contratti e mitiga i rischi organizzativi"
                            onVerticalCardClick={() => setSelectedCoreOperationType("legal-&-compliance")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                        <ExtendedCard
                            title="IT & Infrastructure"
                            image="/images/it-infrastructure.png"
                            description="Supporta i sistemi tecnologici, le reti e la sicurezza informatica in tutta l'organizzazione"
                            onVerticalCardClick={() => setSelectedCoreOperationType("it-&-infrastructure")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
