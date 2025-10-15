"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ExtendedCard from "./ExtendedCard";

export interface SectorTypeProps {
    setSelectedSectorType: (
        type:
            | "industrial-&-mobility"
            | "consumer-product-&-retail"
            | "energy-&-resources"
            | "financial-services"
            | "government-&-infrastructure"
            | "health-&-life-sciences"
            | "technology-media-&-telecom"
            | "private-equity"
            | "education"
    ) => void;
}

export default function SectorType({ setSelectedSectorType }: SectorTypeProps) {
    return (
        <Box sx={{ backgroundColor: "#2E2E38" }}>
            <Grid className="animate__animated animate__fadeInLeft" container spacing={3} padding={5}>
                <Grid size={{ xs: 12 }}>
                    <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                        Sector
                    </Typography>
                    <Typography textAlign="center" variant="body2" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Industrial & Mobility"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedSectorType("industrial-&-mobility")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Consumer Product & Retail"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedSectorType("consumer-product-&-retail")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Energy & Resources"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedSectorType("energy-&-resources")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Financial Services"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedSectorType("financial-services")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Government & Infrastructure"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedSectorType("government-&-infrastructure")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Health & Life Sciences"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedSectorType("health-&-life-sciences")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Technology, Media & Telecom"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedSectorType("technology-media-&-telecom")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Private Equity"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedSectorType("private-equity")}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <ExtendedCard
                        title="Education"
                        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        onVerticalCardClick={() => setSelectedSectorType("education")}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
