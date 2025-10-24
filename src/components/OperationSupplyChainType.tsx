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
                            Supply Chain
                        </Typography>
                        <Typography textAlign="center" variant="body2" color="white" marginX={3}>
                            Funzioni di gestione della logistica, degli acquisti, della produzione e della consegna per garantire una
                            esecuzione efficiente e su larga scala di beni e servizi
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <ExtendedCard
                            title="Procurement"
                            image="/images/procurement.png"
                            description="Facilita l'approvvigionamento di beni e servizi e gestisce i rapporti con i fornitori e gli acquisti"
                            onVerticalCardClick={() => setSelectedOperationSupplyChainType("procurement")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <ExtendedCard
                            title="Logistics"
                            image="/images/logistics.png"
                            description="Supervisiona la movimentazione dei prodotti, l'immagazzinamento e la consegna attraverso le reti di fornitura"
                            onVerticalCardClick={() => setSelectedOperationSupplyChainType("logistics")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
