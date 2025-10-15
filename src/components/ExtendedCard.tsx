"use client";

import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ExtendedCardProps {
    title: string;
    image: string;
    description: string;
    onVerticalCardClick: () => void;
}

export default function ExtendedCard({ title, image, description, onVerticalCardClick }: ExtendedCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            sx={{
                width: "100%",
                height: 500,
                position: "relative",
                overflow: "hidden",
                cursor: hovered ? "pointer" : "default",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.3s ease",
                "&:hover": {
                    transform: "scale(1.02)",
                },
            }}
            elevation={10}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onVerticalCardClick}
        >
            <CardContent
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: hovered ? "center" : "flex-end",
                    color: "white",
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 100%)",
                    transition: "justify-content 0.5s ease, background 0.3s ease",
                    padding: 3,
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        transition: "transform 0.5s ease",
                        transform: hovered ? "translateY(-20px)" : "translateY(0)",
                    }}
                >
                    {title}
                </Typography>

                <Box
                    sx={{
                        maxWidth: "80%",
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                >
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {description}
                    </Typography>
                </Box>

                <ArrowForwardIosIcon
                    sx={{
                        marginTop: 2,
                        fontSize: 20,
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? "translateX(0)" : "translateX(-10px)",
                        transition: "opacity 0.4s ease, transform 0.4s ease",
                    }}
                />
            </CardContent>
        </Card>
    );
}
