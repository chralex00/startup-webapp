"use client";

import React from "react";
import { Startup } from "@/interfaces/startup";
import { Avatar, Card, CardContent, List, ListItem, ListItemAvatar, Typography, Box, Grid } from "@mui/material";

export interface StartupListProps {
    filteredStartups: Startup[];
    onStartupClick: (startup: Startup) => void;
}

export default function StartupList({ filteredStartups, onStartupClick }: StartupListProps) {
    return (
        <Box padding={5}>
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
            {/* <List sx={{ width: "100%" }}>
                {filteredStartups.map((startup) => (
                    <Card
                        key={startup.id}
                        sx={{
                            mb: 2,
                            "&:hover": {
                                cursor: "pointer",
                                transform: "translateY(-2px)",
                            },
                        }}
                        elevation={2}
                    >
                        <ListItem alignItems="flex-start" sx={{ backgroundColor: "#2E2E38" }} onClick={() => onStartupClick(startup)}>
                            <ListItemAvatar>
                                <Avatar src={startup.image} alt={startup.name} sx={{ width: 56, height: 56 }} />
                            </ListItemAvatar>
                            <CardContent sx={{ padding: 0, marginLeft: 2 }}>
                                <Typography variant="h6" component="div" color="white">
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
                                        maxWidth: "100%",
                                    }}
                                >
                                    {startup.description}
                                </Typography>
                            </CardContent>
                        </ListItem>
                    </Card>
                ))}
            </List> */}
        </Box>
    );
}
