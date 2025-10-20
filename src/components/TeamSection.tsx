"use client";

import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";

export default function TeamSection() {
    return (
        <>
            <Box marginY={10}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} padding={5}>
                    <Grid size={{ xs: 12 }}>
                        <Typography textAlign="center" variant="h4" fontWeight="bold" color="white">
                            Il Team
                        </Typography>
                        <Typography textAlign="center" variant="body2" color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Box marginTop={5} display={"flex"} justifyContent="center" flexWrap="wrap" columnGap={25} rowGap={10}>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }}>GP</Avatar>
                                <Typography color="white" variant="body1" fontWeight="bold">
                                    Giuseppe Perrone
                                </Typography>
                                <Typography color="white" variant="body2" textAlign="center">
                                    Partner/Principal
                                    <br />
                                    Technology Consulting
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }}>GG</Avatar>
                                <Typography color="white" variant="body1" fontWeight="bold">
                                    Gianluca Galgano
                                </Typography>
                                <Typography color="white" variant="body2" textAlign="center">
                                    Partner, EY Startup
                                    <br />
                                    and Venture Capital Leader
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }}>AC</Avatar>
                                <Typography color="white" variant="body1" fontWeight="bold">
                                    Andrea Cozzolino
                                </Typography>
                                <Typography color="white" variant="body2" textAlign="center">
                                    Senior Manager
                                    <br />
                                    Technology Consulting
                                </Typography>
                            </Box>
                            {/* </Box>
                        <Box marginLeft="60px" display={"flex"} justifyContent="center" flexWrap="wrap" marginTop={8} gap={25}> */}
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }}>BMA</Avatar>
                                <Typography color="white" variant="body1" fontWeight="bold">
                                    Bruno Maria Altiero
                                </Typography>
                                <Typography color="white" variant="body2" textAlign="center">
                                    Senior, Transactions &<br />
                                    Corporate Finance (TCF)
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }}>VMB</Avatar>
                                <Typography color="white" variant="body1" fontWeight="bold">
                                    Vittorio Morini Bianzino
                                </Typography>
                                <Typography color="white" variant="body2" textAlign="center">
                                    Staff/Assistant, Transactions &<br />
                                    Corporate Finance (TCF)
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }}>CAA</Avatar>
                                <Typography color="white" variant="body1" fontWeight="bold">
                                    Christian Alessandro Atzeni
                                </Typography>
                                <Typography color="white" variant="body2" textAlign="center">
                                    Senior Associate
                                    <br />
                                    Executive Management
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
