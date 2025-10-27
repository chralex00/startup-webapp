"use client";

import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";

export default function TeamSection() {
    return (
        <>
            <Box id="team" marginY={10}>
                <Grid className="animate__animated animate__fadeInLeft" container spacing={3} padding={5}>
                    <Grid size={{ xs: 12 }}>
                        <Typography textAlign="center" variant="h4" fontWeight="bold" color="white" marginBottom={4}>
                            Il Team
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Grid container spacing={5}>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }} src="/team/giuseppe-perrone.jpg" />
                                    <Typography color="white" variant="body1" fontWeight="bold">
                                        Giuseppe Perrone
                                    </Typography>
                                    <Typography color="white" variant="body2" textAlign="center">
                                        Partner/Principal,
                                        <br />
                                        Technology Consulting (AI&Data)
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }} src="/team/gianluca-galgano.jpg" />
                                    <Typography color="white" variant="body1" fontWeight="bold">
                                        Gianluca Galgano
                                    </Typography>
                                    <Typography color="white" variant="body2" textAlign="center">
                                        Partner, EY Startup
                                        <br />
                                        and Venture Capital Leader
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }} src="/team/andrea-cozzolino.jpg" />
                                    <Typography color="white" variant="body1" fontWeight="bold">
                                        Andrea Cozzolino
                                    </Typography>
                                    <Typography color="white" variant="body2" textAlign="center">
                                        Senior Manager,
                                        <br />
                                        Technology Consulting (AI&Data)
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Avatar sx={{ width: "100px", height: "100px", marginBottom: 2 }} src="/team/bruno-maria-altiero.jpg" />
                                    <Typography color="white" variant="body1" fontWeight="bold">
                                        Bruno Maria Altiero
                                    </Typography>
                                    <Typography color="white" variant="body2" textAlign="center">
                                        Senior, Transactions &<br />
                                        Corporate Finance (TCF)
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Avatar
                                        sx={{ width: "100px", height: "100px", marginBottom: 2 }}
                                        src="/team/vittorio-morini-bianzino.jpg"
                                    />
                                    <Typography color="white" variant="body1" fontWeight="bold">
                                        Vittorio Morini Bianzino
                                    </Typography>
                                    <Typography color="white" variant="body2" textAlign="center">
                                        Staff/Assistant, Transactions &<br />
                                        Corporate Finance (TCF)
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Avatar
                                        sx={{ width: "100px", height: "100px", marginBottom: 2 }}
                                        src="/team/christian-alessandro-atzeni.jpg"
                                    />
                                    <Typography color="white" variant="body1" fontWeight="bold">
                                        Christian Alessandro Atzeni
                                    </Typography>
                                    <Typography color="white" variant="body2" textAlign="center">
                                        Senior, Technology
                                        <br />
                                        Consulting (AI&Data)
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
