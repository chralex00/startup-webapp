"use client";

import React, { useEffect } from "react";
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

    useEffect(() => {
        if (startup.consulting) {
            setValue("consulting");
        } else if (startup.assurance) {
            setValue("assurance");
        } else if (startup.tax) {
            setValue("tax");
        }
    }, []);

    return (
        <Box marginBottom={3}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                {value && (
                    <Tabs value={value} sx={{ marginBottom: 2 }}>
                        {startup.assurance && (
                            <Tab
                                sx={{ color: "white", "&.Mui-selected": { color: "secondary.main" } }}
                                color="secondary"
                                label="Assurance"
                                value={"assurance"}
                                onClick={() => handleChange("assurance")}
                            />
                        )}
                        {startup.consulting && (
                            <Tab
                                sx={{ color: "white", "&.Mui-selected": { color: "secondary.main" } }}
                                color="secondary"
                                label="Consulting"
                                value={"consulting"}
                                onClick={() => handleChange("consulting")}
                            />
                        )}
                        {startup.tax && (
                            <Tab
                                sx={{ color: "white", "&.Mui-selected": { color: "secondary.main" } }}
                                color="secondary"
                                label="Tax"
                                value={"tax"}
                                onClick={() => handleChange("tax")}
                            />
                        )}
                    </Tabs>
                )}

                {value === "assurance" && (
                    <Box>
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
                    </Box>
                )}

                {value === "consulting" && (
                    <Box>
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
                    </Box>
                )}

                {value === "tax" && (
                    <Box>
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
                    </Box>
                )}
            </Box>
        </Box>
    );
}
