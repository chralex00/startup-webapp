import React from "react";
import AppBarWithDrawer from "@/components/AppBarWithDrawer";
import { startups } from "@/data/startups";
import { Startup } from "@/interfaces/startup";
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import Link from "next/link";
import AppFooter from "@/components/AppFooter";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import dateformat from "dateformat";
import RelevanceForEyServices from "@/components/RelevanceForEy";
import StartupRevenueAndEbitdaChart from "@/components/StartupRevenueAndEbirdaChart";

export async function generateStaticParams() {
    return startups.map((startup: Startup) => ({
        id: startup.id.toString(),
    }));
}

export default function StartupDetails({ params }: { params: { id: string } }) {
    const { id } = params;
    const startup: Startup | null = startups.find((s: Startup) => s.id === Number(id)) ?? null;

    if (!startup) {
        redirect("/");
    }

    return (
        <>
            <AppBarWithDrawer />

            <Box marginX="auto" sx={{ backgroundColor: "#1E1E24" }}>
                <Box sx={{ maxWidth: "1350px", p: 4, minHeight: "100vh", color: "white", mx: "auto" }}>
                    <Box display="flex" justifyContent="flex-end">
                        <Link href="/?fromStartupDetails=true">
                            <Button
                                variant="contained"
                                disableElevation
                                color="inherit"
                                sx={{ color: "black", borderRadius: "12px", marginBottom: 3, textTransform: "capitalize" }}
                            >
                                <KeyboardArrowLeftIcon />
                                Indietro
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", mb: 5 }}>
                        <Box>
                            <Typography variant="h4" fontWeight="bold" color="secondary">
                                {startup.name}
                            </Typography>
                            <Stack direction="row" spacing={0} mt={1} flexWrap="wrap">
                                {startup?.sectors
                                    ?.split(",")
                                    ?.map((word) =>
                                        word.length === 1 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()
                                    )
                                    ?.map((sector, index) => (
                                        <Chip
                                            key={index}
                                            sx={{ mr: 1, mt: 1 }}
                                            label={sector.trim()}
                                            color="secondary"
                                            variant="outlined"
                                        />
                                    ))}
                            </Stack>
                        </Box>
                        <img
                            src={`/logos/${startup.logo}`}
                            alt={`${startup.name}'s logo`}
                            style={{
                                width: "auto",
                                height: "50px",
                                marginTop: "-5px",
                                marginRight: "10px",
                                margin: "20px",
                            }}
                        />
                    </Box>

                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Card sx={{ backgroundColor: "#2E2E38", borderRadius: 2, mb: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom color="white">
                                        Descrizione
                                    </Typography>
                                    <Typography variant="body1" color="gray">
                                        {startup.description}
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card sx={{ backgroundColor: "#2E2E38", borderRadius: 2, mb: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom color="white">
                                        Dati finanziari
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid size={{ xs: 6 }}>
                                            {startup.totalRaisedToDate && (
                                                <Typography variant="body2" color="gray">
                                                    💰 <strong>Totale raccolto ad oggi:</strong> ${" "}
                                                    {startup.totalRaisedToDate.toFixed(2).replace(".", ",")} M
                                                </Typography>
                                            )}
                                            {startup.lastDealDate && (
                                                <Typography variant="body2" color="gray">
                                                    🗓️ <strong>Data dell&apos;ultimo deal:</strong>{" "}
                                                    {startup.lastDealDate}
                                                </Typography>
                                            )}
                                        </Grid>
                                        <Grid size={{ xs: 6 }}>
                                            {startup.aidaRevenue2024 && (
                                                <Typography variant="body2" color="gray">
                                                    📈 <strong>Ricavi 2024:</strong> ${" "}
                                                    {Number(startup.aidaRevenue2024).toFixed(2).replace(".", ",")} M
                                                </Typography>
                                            )}
                                            {startup.aidaEbitda2024 && (
                                                <Typography variant="body2" color="gray">
                                                    📉 <strong>EBITDA 2024:</strong> ${" "}
                                                    {Number(startup.aidaEbitda2024).toFixed(2).replace(".", ",")} M
                                                </Typography>
                                            )}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                            <Card sx={{ backgroundColor: "#2E2E38", borderRadius: 2, mb: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom color="white">
                                        Dati finanziari degli ultimi 3 anni
                                    </Typography>
                                    <StartupRevenueAndEbitdaChart
                                        name={startup.name}
                                        aidaRevenue2022={Number(startup.aidaRevenue2022)}
                                        aidaRevenue2023={Number(startup.aidaRevenue2023)}
                                        aidaRevenue2024={Number(startup.aidaRevenue2024)}
                                        aidaEbitda2022={Number(startup.aidaEbitda2022)}
                                        aidaEbitda2023={Number(startup.aidaEbitda2023)}
                                        aidaEbitda2024={Number(startup.aidaEbitda2024)}
                                    />
                                </CardContent>
                            </Card>

                            <Card sx={{ backgroundColor: "#2E2E38", borderRadius: 2, mb: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom color="white">
                                        Rilevanza per Service Lines EY
                                    </Typography>

                                    <RelevanceForEyServices startup={startup} />

                                    {startup.eySubteamSat && (
                                        <Typography variant="body2" color="gray" gutterBottom>
                                            <strong>Subteam:</strong> {startup.eySubteamSat}
                                        </Typography>
                                    )}

                                    {startup.eyNotesSat && (
                                        <Typography variant="body2" color="gray" gutterBottom>
                                            <strong>Note:</strong> {startup.eyNotesSat}
                                        </Typography>
                                    )}

                                    {startup.potentialSinergiesWithEy && (
                                        <Typography variant="body2" color="gray">
                                            <strong>Sinergie potenziali:</strong> {startup.potentialSinergiesWithEy}
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>

                            {startup.useCase && (
                                <Card sx={{ backgroundColor: "#2E2E38", borderRadius: 2 }}>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom color="white">
                                            Use Case
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            textTransform="uppercase"
                                            gutterBottom
                                            color="white"
                                            fontWeight="bold"
                                            marginTop={3}
                                        >
                                            Profilo società
                                        </Typography>

                                        <ul>
                                            {startup.useCase.profile.features.map((feature, index) => (
                                                <li key={index}>
                                                    <Typography variant="body1" color="gray">
                                                        {feature}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>

                                        <Grid container spacing={3}>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <Box
                                                    padding={4}
                                                    borderRadius={2}
                                                    display="flex"
                                                    flexDirection="column"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    sx={{ backgroundColor: "#FFE600", color: "primary" }}
                                                >
                                                    <Typography variant="h5" fontWeight="bold">
                                                        € {startup.useCase.profile.revenue2024} M
                                                    </Typography>
                                                    <Typography variant="caption">ricavi 2024</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <Box
                                                    padding={4}
                                                    borderRadius={2}
                                                    display="flex"
                                                    flexDirection="column"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    sx={{ backgroundColor: "#FFE600", color: "primary" }}
                                                >
                                                    <Typography variant="h5" fontWeight="bold">
                                                        € {startup.useCase.profile.ebitda2024} M
                                                    </Typography>
                                                    <Typography variant="caption">EBITDA 2024</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Typography
                                            variant="body2"
                                            textTransform="uppercase"
                                            gutterBottom
                                            color="white"
                                            fontWeight="bold"
                                            marginTop={3}
                                        >
                                            La criticità fondamentale
                                        </Typography>

                                        <ul>
                                            {startup.useCase.criticalIssues.features.map((feature, index) => (
                                                <li key={index}>
                                                    <Typography variant="body1" color="gray">
                                                        {feature}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>

                                        <Typography
                                            variant="body2"
                                            textTransform="uppercase"
                                            gutterBottom
                                            color="white"
                                            fontWeight="bold"
                                            marginTop={3}
                                        >
                                            Come e chi può aiutare
                                        </Typography>

                                        <ul>
                                            {startup.useCase.help.features.map((feature, index) => (
                                                <li key={index}>
                                                    <Typography variant="body1" color="white" fontWeight="bold">
                                                        {feature.title}
                                                    </Typography>
                                                    <Typography variant="body1" color="gray">
                                                        {feature.description}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )}
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ backgroundColor: "#2E2E38", borderRadius: 2, mb: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom color="white">
                                        Informazioni
                                    </Typography>
                                    <Typography variant="body2" color="gray">
                                        📍 <strong>Sede:</strong> {startup.hqCity}, {startup.hqRegion}
                                    </Typography>
                                    {startup.numberOfEmplyees && (
                                        <Typography variant="body2" color="gray">
                                            👥 <strong>Dipendenti:</strong> {startup.numberOfEmplyees}
                                        </Typography>
                                    )}
                                    {startup.mainClients && (
                                        <Typography variant="body2" color="gray">
                                            🤝🏻 <strong>Principali clienti:</strong> {startup.mainClients}
                                        </Typography>
                                    )}

                                    <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

                                    <Button
                                        component={Link}
                                        href={startup.website.startsWith("http") ? startup.website : `https://${startup.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="contained"
                                        endIcon={<OpenInNewIcon />}
                                        sx={{
                                            backgroundColor: "#5E81F4",
                                            textTransform: "none",
                                            "&:hover": { backgroundColor: "#4b6ad6" },
                                        }}
                                    >
                                        Visita sito web
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <AppFooter />
        </>
    );
}
