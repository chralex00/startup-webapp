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
            <Grid className="animate__animated animate__fadeInLeft" container spacing={3} padding={5}>
                <Grid size={{ xs: 12 }}>
                    <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                        Core Operations
                    </Typography>
                    <Typography textAlign="center" variant="body2" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                    <ExtendedCard
                        title="Finance"
                        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedCoreOperationType("finance")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                    <ExtendedCard
                        title="HR & People Ops"
                        image="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedCoreOperationType("hr-&-people-ops")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                    <ExtendedCard
                        title="Legal & Compliance"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedCoreOperationType("legal-&-compliance")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                    <ExtendedCard
                        title="IT & Infrastructure"
                        image="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1686"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedCoreOperationType("it-&-infrastructure")}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
