"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ExtendedCard from "./ExtendedCard";

export interface VerticalTypeProps {
    setSelectedVerticalType: (type: "core-operations" | "operations-and-supply-chain" | "customer-and-revenue") => void;
}

export default function VerticalType({ setSelectedVerticalType }: VerticalTypeProps) {
    return (
        <Box sx={{ backgroundColor: "#2E2E38" }}>
            <Box sx={{ mx: "auto", maxWidth: "1350px", marginTop: -0 }}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} padding={5}>
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
                            Soluzioni Verticali
                        </Typography>
                        <Typography textAlign="center" variant="body2" color="white" marginX={3}>
                            Le soluzioni verticali rispondo a esigenze specifiche dell&apos;organizzazione. Sono divise in Core Operations,
                            Supply Chain, Revenue and Customer Functions
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Core Operations"
                            image="/images/core-operations.png"
                            description="Si riferisce alle attività fondamentali e imprescindibili che generano valore e sostengono il funzionamento del business. Sono i processi centrali che permettono all’azienda di erogare i propri prodotti o servizi e di raggiungere gli obiettivi strategici"
                            onVerticalCardClick={() => setSelectedVerticalType("core-operations")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Supply Chain"
                            image="/images/supply-chain.png"
                            description="Funzioni di gestione della logistica, degli acquisti, della produzione e della consegna per garantire un'esecuzione efficiente e su larga scala di beni e servizi"
                            onVerticalCardClick={() => setSelectedVerticalType("operations-and-supply-chain")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Revenue and Customer Functions"
                            image="/images/revenue-customer-functions.png"
                            description="Quest'area si concentra sull'integrazione di tutte le attività che impattano direttamente sulla generazione dei ricavi e sulle relazioni con i clienti"
                            onVerticalCardClick={() => setSelectedVerticalType("customer-and-revenue")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
