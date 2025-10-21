"use client";

import React from "react";
import { Startup } from "@/interfaces/startup";
import { Box, Tab, Tabs, Typography } from "@mui/material";

export interface RelevanceForEyServicesProps {
    startup: Startup;
}

export default function RelevanceForEyServices({ startup }: RelevanceForEyServicesProps) {
    const [value, setValue] = React.useState<string>("");

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box marginBottom={3}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value}>
                    {startup.assurance && <Tab label="Assurance" value={"assurance"} onClick={() => handleChange("assurance")} />}
                    {startup.consulting && <Tab label="Consulting" value={"consulting"} onClick={() => handleChange("consulting")} />}
                    {startup.tax && <Tab label="Tax" value={"tax"} onClick={() => handleChange("tax")} />}
                </Tabs>

                {value === "assurance" && <Box>
                    {startup.useCaseAssurance && (
                        <Typography variant="body2" color="gray" gutterBottom>
                            <strong>Caso d&apos;uso:</strong> {startup.useCaseAssurance}
                        </Typography>
                    )}
                    {startup.eySubteamAssurance && (
                        <Typography variant="body2" color="gray" gutterBottom>
                            <strong>Subteam EY:</strong> {startup.eySubteamAssurance}
                        </Typography>
                    )}
                </Box>}

                {value === "consulting" && <Box>
                    {startup.useCaseConsulting && (
                        <Typography variant="body2" color="gray" gutterBottom>
                            <strong>Caso d&apos;uso:</strong> {startup.useCaseConsulting}
                        </Typography>
                    )}
                    {startup.eySubteamConsulting && (
                        <Typography variant="body2" color="gray" gutterBottom>
                            <strong>Subteam EY:</strong> {startup.eySubteamConsulting}
                        </Typography>
                    )}
                </Box>}

                {value === "tax" && <Box>
                    {startup.useCaseTax && (
                        <Typography variant="body2" color="gray" gutterBottom>
                            <strong>Caso d&apos;uso:</strong> {startup.useCaseTax}
                        </Typography>
                    )}
                    {startup.eySubteamTax && (
                        <Typography variant="body2" color="gray" gutterBottom>
                            <strong>Subteam EY:</strong> {startup.eySubteamTax}
                        </Typography>
                    )}
                </Box>}
            </Box>
        </Box>
    );
}
