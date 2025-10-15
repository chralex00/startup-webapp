"use client";

import React from "react";
import { Startup } from "@/interfaces/startup";
import { Avatar, Card, CardContent, List, ListItem, ListItemAvatar, Typography, Box } from "@mui/material";

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
            <List sx={{ width: "100%" }}>
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
            </List>
        </Box>
    );
}
