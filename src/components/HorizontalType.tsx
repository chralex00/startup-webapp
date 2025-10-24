"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ExtendedCard from "./ExtendedCard";

export interface HorizontalTypeProps {
    setSelectedHorizontalType: (
        type: "ai-automation-&-workflows" | "data-analytics-knowledge-management" | "collaboration-&-organizational-communication"
    ) => void;
}

export default function HorizontalType({ setSelectedHorizontalType }: HorizontalTypeProps) {
    return (
        <Box sx={{ backgroundColor: "#2E2E38" }}>
            <Box sx={{ mx: "auto", maxWidth: "1350px", marginTop: -0 }}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} paddingBottom={10}>
                    <Grid size={{ xs: 12 }}>
                        <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                            Soluzioni Orizzontali
                        </Typography>
                        <Typography textAlign="center" variant="body2" color="white">
                            Si tratta di tecnologie trasversali che si applicano a diverse funzioni e settori
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="AI, Automation & Workflows"
                            image="/images/ai-automation-workflows.png"
                            description="Aziende innovative che forniscono tecnologie che migliorano o sostituiscono i processi manuali con sistemi intelligenti e automatizzati"
                            onVerticalCardClick={() => setSelectedHorizontalType("ai-automation-&-workflows")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Data, Analytics & Knwoledge Management"
                            image="/images/data-analytics-knowledge-management.png"
                            description="Aziende innovative che aiutano le aziende a raccogliere, unificare, interpretare e rendere operativi dati e conoscenze interne"
                            onVerticalCardClick={() => setSelectedHorizontalType("data-analytics-knowledge-management")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Collaboration & Organizational Communication"
                            image="/images/collaboration-organizational-communication.png"
                            description="Aziende tecnologiche innovative che migliorano la collaborazione, l'allineamento degli obiettivi e il coordinamento del team in tempo reale"
                            onVerticalCardClick={() => setSelectedHorizontalType("collaboration-&-organizational-communication")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
