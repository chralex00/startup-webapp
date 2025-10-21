"use client";

import React from "react";
import { Startup } from "@/interfaces/startup";
import { Box, Chip, Typography } from "@mui/material";

export interface RelevanceForEyServicesProps {
    startup: Startup;
}

export default function RelevanceForEyServices({ startup }: RelevanceForEyServicesProps) {
    return (
        <Box marginBottom={3}>
            <Box display="flex" alignItems="center" flexWrap="wrap">
                {startup.assurance && <Chip color="secondary" label="Assurance" variant="outlined" sx={{ mt: 1, mr: 1 }} />}
                {startup.tax && <Chip color="secondary" label="Tax" variant="outlined" sx={{ mt: 1, mr: 1 }} />}
                {startup.consulting && <Chip color="secondary" label="Consulting" variant="outlined" sx={{ mt: 1, mr: 1 }} />}
                {startup.strategyAndTransaction && <Chip color="secondary" label="Strategy and Transaction" variant="outlined" sx={{ mt: 1, mr: 1 }} />}
            </Box>
        </Box>
    );
}
