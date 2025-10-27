"use client";

import React from "react";
import { Box, Button, AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AppBarWithDrawer(): React.JSX.Element {
    const router = useRouter();

    return (
        <>
            <MuiAppBar
                className="animate__animated animate__fadeInDown"
                position="static"
                sx={{ backgroundColor: "#2E2E38", height: "65px", display: "flex", alignItems: "start", justifyContent: "center" }}
            >
                <Toolbar
                    variant="dense"
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box display="flex" alignItems="center">
                        <Box
                            sx={{
                                "&:hover": {
                                    cursor: "pointer",
                                },
                            }}
                        >
                            <Image
                                onClick={() => router.push("/")}
                                src={`/eyq_logo.svg`}
                                alt="EY Logo"
                                width="36"
                                height="36"
                                style={{
                                    marginTop: "-5px",
                                    marginRight: "10px",
                                }}
                            />
                        </Box>
                        <Typography
                            style={{ lineHeight: "14px !important" }}
                            variant="body2"
                            color="inherit"
                            component="div"
                            fontWeight="bold"
                            marginTop={0}
                        >
                            Shape the future
                            <br />
                            with confidence
                        </Typography>
                    </Box>
                    <Button variant="outlined" color="secondary" href="#team">
                        Il team di progetto
                    </Button>
                </Toolbar>
            </MuiAppBar>
        </>
    );
}
