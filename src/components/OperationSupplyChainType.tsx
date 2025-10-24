"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ExtendedCard from "./ExtendedCard";

export interface OperationSupplyChainTypeProps {
    setSelectedOperationSupplyChainType: (type: "procurement" | "logistics") => void;
}

export default function OperationSupplyChainType({ setSelectedOperationSupplyChainType }: OperationSupplyChainTypeProps) {
    return (
        <Box sx={{ backgroundColor: "#2E2E38" }}>
            <Box sx={{ mx: "auto", maxWidth: "1350px", marginTop: -0 }}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} paddingBottom={10}>
                    <Grid size={{ xs: 12 }}>
                        <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                            Supply Chain
                        </Typography>
                        <Typography textAlign="center" variant="body2" color="white">
                            Funzioni di gestione della logistica, degli acquisti, della produzione e della consegna per garantire una
                            esecuzione efficiente e su larga scala di beni e servizi
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <ExtendedCard
                            title="Procurement"
                            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072"
                            description="Facilita l'approvvigionamento di beni e servizi e gestisce i rapporti con i fornitori e gli acquisti"
                            onVerticalCardClick={() => setSelectedOperationSupplyChainType("procurement")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <ExtendedCard
                            title="Logistics"
                            image="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                            description="Supervisiona la movimentazione dei prodotti, l'immagazzinamento e la consegna attraverso le reti di fornitura"
                            onVerticalCardClick={() => setSelectedOperationSupplyChainType("logistics")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
