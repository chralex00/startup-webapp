"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ExtendedCard from "./ExtendedCard";

export interface ApplicationTypeProps {
    setSelectedApplicationType: (type: "soluzioni-verticali" | "soluzioni-orizzontali" | "soluzioni-settoriali") => void;
}

export default function ApplicationType({ setSelectedApplicationType }: ApplicationTypeProps) {
    return (
        <Box sx={{ backgroundColor: "#2E2E38" }}>
            <Box sx={{ mx: "auto", maxWidth: "1350px", marginTop: -0 }}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} paddingBottom={10}>
                    <Grid size={{ xs: 12 }}>
                        <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                            Tipo di Applicazione Richiesta
                        </Typography>
                        <Typography textAlign="center" variant="body2" color="white">
                            Seleziona la soluzione in base al tipo di applicazione richiesta
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Soluzioni Verticali"
                            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072"
                            description="Rispondono ad esigenze specifiche per le varie funzioni aziendali (es. Finance, Legal, HR)"
                            onVerticalCardClick={() => setSelectedApplicationType("soluzioni-verticali")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Soluzioni Orizzontali"
                            image="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                            description="Si tratta di tecnologie trasversali che si applicano a diverse funzioni e settori"
                            onVerticalCardClick={() => setSelectedApplicationType("soluzioni-orizzontali")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Soluzioni Settoriali"
                            image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                            description="Piattaforme e strumenti dedicati a particolari industrie"
                            onVerticalCardClick={() => setSelectedApplicationType("soluzioni-settoriali")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
