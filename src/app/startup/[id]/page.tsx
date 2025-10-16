import React from "react";
import AppBarWithDrawer from "@/components/AppBarWithDrawer";
import { startups } from "@/data/startups";
import { Startup } from "@/interfaces/startup";
import { Avatar, Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
    return startups.map((startup) => ({
        id: startup.id.toString(),
    }));
}

export default async function StartupDetails({ params }: { params: { id: string } }) {
    const { id } = params;

    const startup: Startup | null = startups.find((startup) => startup.id === Number(id)) ?? null;

    if (!startup) {
        redirect("/");
    }

    return (
        <Box marginX="auto" sx={{ maxWidth: "1350px" }}>
            <AppBarWithDrawer appTitle="Shape the future<br />with confidence" drawerItems={[]} />

            <Box sx={{ p: 4, backgroundColor: "#1E1E24", minHeight: "100vh" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Avatar src={startup.image} alt={startup.name} sx={{ width: 80, height: 80, mr: 3 }} />
                    <Box>
                        <Typography variant="h4" color="white" fontWeight="bold">
                            {startup.name}
                        </Typography>
                        <Typography variant="subtitle1" color="gray">
                            {startup.category}
                        </Typography>
                    </Box>
                </Box>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Card
                            sx={{
                                backgroundColor: "#2E2E38",
                                color: "white",
                                borderRadius: 2,
                                p: 2,
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Descrizione
                                </Typography>
                                <Typography variant="body1" color="white">
                                    {startup.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card
                            sx={{
                                backgroundColor: "#2E2E38",
                                color: "white",
                                borderRadius: 2,
                                p: 2,
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Informazioni
                                </Typography>

                                <Typography variant="body2" color="gray">
                                    📍 <strong>Località:</strong> {startup.location}
                                </Typography>
                                <Typography variant="body2" color="gray">
                                    🏗️ <strong>Fondata:</strong> {startup.founded}
                                </Typography>
                                <Typography variant="body2" color="gray">
                                    🧬 <strong>Categoria:</strong> {startup.category}
                                </Typography>

                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        component={Link}
                                        href={startup.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#5E81F4",
                                            textTransform: "none",
                                            "&:hover": { backgroundColor: "#4b6ad6" },
                                        }}
                                    >
                                        Visita sito web
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
