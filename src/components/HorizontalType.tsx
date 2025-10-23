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
            <Box sx={{ mx: "auto", maxWidth: "1350px", marginTop: -7 }}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} padding={5}>
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
                            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072"
                            description="Aziende innovative che forniscono tecnologie che migliorano o sostituiscono i processi manuali con sistemi intelligenti e automatizzati"
                            onVerticalCardClick={() => setSelectedHorizontalType("ai-automation-&-workflows")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Data, Analytics & Knwoledge Management"
                            image="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                            description="Aziende innovative che aiutano le aziende a raccogliere, unificare, interpretare e rendere operativi dati e conoscenze interne"
                            onVerticalCardClick={() => setSelectedHorizontalType("data-analytics-knowledge-management")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Collaboration & Organizational Communication"
                            image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                            description="Aziende tecnologiche innovative che migliorano la collaborazione, l'allineamento degli obiettivi e il coordinamento del team in tempo reale"
                            onVerticalCardClick={() => setSelectedHorizontalType("collaboration-&-organizational-communication")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
