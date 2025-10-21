"use client";

import React from "react";
import { Startup } from "@/interfaces/startup";
import { Avatar, Card, CardContent, Typography, Box, Grid } from "@mui/material";

export interface StartupListProps {
    filteredStartups: Startup[];
    onStartupClick: (startup: Startup) => void;
}

export default function StartupList({ filteredStartups, onStartupClick }: StartupListProps) {
    return (
        <Box padding={5}>
            <Box sx={{ mx: "auto", maxWidth: "1350px" }}>
                <Typography variant="h4" color="white" marginBottom={5}>
                    Startups
                </Typography>
                <Grid container spacing={2}>
                    {filteredStartups.map((startup) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={startup.id}>
                            <Card
                                onClick={() => onStartupClick(startup)}
                                sx={{
                                    backgroundColor: "#2E2E38",
                                    display: "flex",
                                    alignItems: "center",
                                    p: 2,
                                    transition: "transform 0.2s ease",
                                    "&:hover": {
                                        cursor: "pointer",
                                        transform: "translateY(-3px)",
                                    },
                                }}
                                elevation={3}
                            >
                                <Avatar src={startup.image} alt={startup.name} sx={{ width: 56, height: 56, mr: 2 }} />
                                <CardContent sx={{ p: 0 }}>
                                    <Typography variant="h6" color="white">
                                        {startup.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="white"
                                        sx={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 1,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {startup.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
