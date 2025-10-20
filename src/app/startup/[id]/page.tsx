import React from "react";
import AppBarWithDrawer from "@/components/AppBarWithDrawer";
import { startups } from "@/data/startups";
import { Startup } from "@/interfaces/startup";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { redirect } from "next/navigation";
import Link from "next/link";
import AppFooter from "@/components/AppFooter";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
      <AppBarWithDrawer appTitle="Shape the future<br />with confidence" drawerItems={[]} />

      <Box marginX="auto" sx={{ maxWidth: "1350px" }}>
        <Box sx={{ p: 4, backgroundColor: "#1E1E24", minHeight: "100vh", color: "white" }}>

          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <Avatar
              src={startup.image || "/default_logo.png"}
              alt={startup.name}
              sx={{ width: 90, height: 90, mr: 3 }}
            />
            <Box>
              <Typography variant="h4" fontWeight="bold" color="secondary">
                {startup.name}
              </Typography>
              <Stack direction="row" spacing={1} mt={1}>
                {startup.vertical && <Chip color="secondary" label={startup.vertical} variant="outlined" />}
                {startup.horizontal && <Chip label={startup.horizontal} color="secondary" variant="outlined" />}
              </Stack>
            </Box>
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
                      <Typography variant="body2" color="gray">
                        💰 <strong>Totale raccolto:</strong> {startup.totalRaisedToDate ?? "N/D"} M$
                      </Typography>
                      <Typography variant="body2" color="gray">
                        🗓️ <strong>Ultimo deal:</strong> {startup.lastDealDate ?? "N/D"}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <Typography variant="body2" color="gray">
                        📈 <strong>Revenue 2024:</strong> {startup.aidaRevenue2024 ?? "N/D"} M$
                      </Typography>
                      <Typography variant="body2" color="gray">
                        📉 <strong>EBITDA 2024:</strong> {startup.aidaEbitda2024 ?? "N/D"} M$
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Card sx={{ backgroundColor: "#2E2E38", borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="white">
                    EY Insights
                  </Typography>

                  <Typography variant="body2" color="gray" gutterBottom>
                    <strong>Subteam:</strong> {startup.eySubteamSat ?? "N/D"}
                  </Typography>

                  {startup.eyNotes && (
                    <Typography variant="body2" color="gray" gutterBottom>
                      <strong>Note:</strong> {startup.eyNotes}
                    </Typography>
                  )}

                  {startup.potentialSinergiesWithEy && (
                    <Typography variant="body2" color="gray">
                      <strong>Sinergie potenziali:</strong> {startup.potentialSinergiesWithEy}
                    </Typography>
                  )}
                </CardContent>
              </Card>
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
                  <Typography variant="body2" color="gray">
                    👥 <strong>Dipendenti:</strong> {startup.numberOfEmplyees ?? "N/D"}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    🔒 <strong>Privacy:</strong> {startup.securityPrivacy ?? "N/D"}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    💾 <strong>Data residency:</strong> {startup.dataResidency ?? "N/D"}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    💳 <strong>Modello prezzo:</strong> {startup.pricingModel ?? "N/D"}
                  </Typography>

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

              {/* Scores */}
              <Card sx={{ backgroundColor: "#2E2E38", borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="white">
                    EY Scores
                  </Typography>

                  {[
                    { label: "Fit EY Services", value: startup.fitWithEyServices },
                    { label: "Enterprise Fit", value: startup.enterpriseFit },
                    { label: "Security Fit", value: startup.securityFit },
                    { label: "Economic Fit", value: startup.economicFit },
                    { label: "Priority Score", value: startup.priorityScore },
                  ].map((score, idx) => (
                    <Box key={idx} sx={{ mb: 1.5 }}>
                      <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography variant="body2" color="gray">
                            {score.label}
                        </Typography>
                        <Typography variant="body2" color="white">
                            {score.value ?? "N/D"}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={Number(score.value ?? 0) * 20}
                        sx={{ height: 8, borderRadius: 2, mt: 0.5 }}
                      />
                    </Box>
                  ))}
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
