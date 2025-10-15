"use client";

import React from "react";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    AppBar as MuiAppBar,
    Toolbar,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface AppBarWithDrawerProps {
    appTitle: string;
    drawerItems?: {
        title: string;
        href: string;
        icon: React.JSX.Element;
    }[];
}

export default function AppBarWithDrawer(props: AppBarWithDrawerProps): React.JSX.Element {
    const router = useRouter();

    const [showDrawer, setShowDrawer] = React.useState<boolean>(false);

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
                            }}>
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
                        <Typography variant="body2" color="inherit" component="div" fontWeight="bold" marginTop={0}>
                            <span dangerouslySetInnerHTML={{ __html: props.appTitle }} />
                        </Typography>
                    </Box>
                </Toolbar>
            </MuiAppBar>
            <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
                <Box sx={{ width: "300px" }} role="presentation" onClick={() => setShowDrawer(false)}>
                    <List>
                        {props.drawerItems?.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton color="primary" href={item.href}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
