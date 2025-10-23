"use client";

import React from "react";
import { Startup } from "@/interfaces/startup";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

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
                                    height: "100%",
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
                                {startup.logo && (
                                    <img
                                        src={`/logos/${startup.logo}`}
                                        alt={`${startup.name}'s logo`}
                                        style={{
                                            width: "100px",
                                            height: "auto",
                                            marginTop: "-5px",
                                            marginRight: "10px",
                                        }}
                                    />
                                )}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
