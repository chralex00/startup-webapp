import React from "react";
import AppBarWithDrawer from "@/components/AppBarWithDrawer";
import { startups } from "@/data/startups";
import { Startup } from "@/interfaces/startup";
import { Box } from "@mui/material";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
    return startups.map((startup) => ({
      id: startup.id.toString(),
    }));
}

export default async function StartupDetails({ params }: { params: { id: string } }) {
    const { id } = params;

    const startup: Startup | null =
        startups.find((startup) => startup.id === Number(id)) ?? null;
    
    if (!startup) {
        redirect("/");
    }

    return (
        <Box marginX="auto" sx={{ maxWidth: "1350px" }}>
            <AppBarWithDrawer
                appTitle="Shape the future<br />with confidence"
                drawerItems={[]}
            />
            {JSON.stringify(startup)}
        </Box>
    );
}
