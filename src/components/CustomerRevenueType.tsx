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
            <Box sx={{ mx: "auto", maxWidth: "1350px", marginTop: -0 }}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} paddingBottom={10}>
                    <Grid size={{ xs: 12 }}>
                        <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                            Revenue and Customer Functions
                        </Typography>
                        <Typography textAlign="center" variant="body2" color="white">
                            Quest&apos;area si concentra sull&apos;integrazione di tutte le attività che
                            impattano direttamente sulla generazione dei ricavi e sulle relazioni con i
                            clienti
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Sales & Marketing"
                            image="/images/sales-marketing.png"
                            description="Promuove la notorietà del marchio, l'acquisizione di clienti e il fatturato attraverso campagne"
                            onVerticalCardClick={() => setSelectedCustomerRevenueType("sales-&-marketing")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Customer Support"
                            image="/images/customer-support.png"
                            description="Risolve i problemi dei clienti, garantisce la soddisfazione e costruisce una fidelizzazione a lungo termine"
                            onVerticalCardClick={() => setSelectedCustomerRevenueType("customer-support")}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ExtendedCard
                            title="Product Development"
                            image="/images/product-development.png"
                            description="Progetta e migliora i prodotti in base alle esigenze e al feedback del mercato"
                            onVerticalCardClick={() => setSelectedCustomerRevenueType("product-development")}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
