"use client";

import React from "react";
import { Startup } from "@/interfaces/startup";
import { Dialog, DialogTitle, DialogContent, Typography, Link } from "@mui/material";
import Image from "next/image";

interface Props {
    open: boolean;
    onClose: () => void;
    startup: Startup | null;
}

export default function StartupModal({ open, onClose, startup }: Props) {
    if (!startup) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{startup.name}</DialogTitle>
            <DialogContent>
                <Image src={startup.image} alt={startup.name} width={500} height={300} style={{ width: "100%", borderRadius: 8 }} />
                <Typography variant="body1" mt={2}>
                    {startup.description}
                </Typography>
                <Typography variant="subtitle2" mt={2}>
                    Categoria: {startup.category}
                </Typography>
                <Typography variant="subtitle2">Fondata nel {startup.founded}</Typography>
                <Typography variant="subtitle2">Sede: {startup.location}</Typography>
                <Link href={startup.website} target="_blank" rel="noopener" sx={{ mt: 1, display: "block" }}>
                    Visita sito web
                </Link>
            </DialogContent>
        </Dialog>
    );
}
