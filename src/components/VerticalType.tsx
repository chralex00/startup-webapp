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
            <Grid className="animate__animated animate__fadeInLeft" container spacing={3} padding={5}>
                <Grid size={{ xs: 12 }}>
                    <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                        Vertical
                    </Typography>
                    <Typography textAlign="center" variant="body2" color="white">
                        Le soluzioni verticali rispondono a esigenze specifiche dell’organizzazione, con aziende tecnologiche innovative
                        orientate a funzioni interne specifiche
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Core Operations"
                        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072"
                        description="Funzioni che mantengono il controllo interno, la conformità normativa, la stabilità finanziaria, la struttura organizzativa e la governance tecnologica"
                        onVerticalCardClick={() => setSelectedVerticalType("core-operations")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Operations and Supply Chain"
                        image="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                        description="Funzioni di gestione della logistica, degli acquisti, della produzione e della consegna per garantire un'esecuzione efficiente e su larga scala di beni e servizi"
                        onVerticalCardClick={() => setSelectedVerticalType("operations-and-supply-chain")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Customer and Revenue"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Funzionalità rivolte all'esterno che stimolano la crescita e il coinvolgimento dei clienti migliorando la conversione, la personalizzazione, la reattività e l'adattamento del prodotto al mercato"
                        onVerticalCardClick={() => setSelectedVerticalType("customer-and-revenue")}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
