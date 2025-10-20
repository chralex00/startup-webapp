"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ExtendedCard from "./ExtendedCard";

export interface CustomerRevenueTypeProps {
    setSelectedCustomerRevenueType: (type: "sales-&-marketing" | "customer-support" | "product-development") => void;
}

export default function CustomerRevenueType({ setSelectedCustomerRevenueType }: CustomerRevenueTypeProps) {
    return (
        <Box sx={{ backgroundColor: "#2E2E38" }}>
            <Grid className="animate__animated animate__fadeInLeft" container spacing={3} padding={5}>
                <Grid size={{ xs: 12 }}>
                    <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                        Customer Revenue
                    </Typography>
                    <Typography textAlign="center" variant="body2" color="white">
                        Funzionalità rivolte all’esterno che stimolano la crescita e il coinvolgimento dei clienti migliorando la
                        conversione, la personalizzazione, la reattività e l’adattamento del prodotto al mercato
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Sales & Marketing"
                        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072"
                        description="Promuove la notorietà del marchio, l'acquisizione di clienti e il fatturato attraverso campagne"
                        onVerticalCardClick={() => setSelectedCustomerRevenueType("sales-&-marketing")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Customer Support"
                        image="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                        description="Risolve i problemi dei clienti, garantisce la soddisfazione e costruisce una fidelizzazione a lungo termine"
                        onVerticalCardClick={() => setSelectedCustomerRevenueType("customer-support")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Product Development"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Progetta e migliora i prodotti in base alle esigenze e al feedback del mercato"
                        onVerticalCardClick={() => setSelectedCustomerRevenueType("product-development")}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
