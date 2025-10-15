"use client";

import * as React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Drawer,
    IconButton,
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

export interface AppBarWithDrawerProps {
    appTitle: string;
    drawerItems?: {
        title: string;
        href: string;
        icon: React.JSX.Element;
    }[];
}

export default function AppBarWithDrawer(props: AppBarWithDrawerProps): React.JSX.Element {
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
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setShowDrawer(!showDrawer)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Image
                            src={`/eyq_logo.svg`}
                            alt="EY Logo"
                            width="36"
                            height="36"
                            style={{ marginTop: "-5px", marginRight: "10px" }}
                        />
                        <Typography variant="body2" color="inherit" component="div" fontWeight="bold" marginTop={0}>
                            <span dangerouslySetInnerHTML={{ __html: props.appTitle }} />
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Typography
                            sx={{
                                "@media (max-width:455px)": {
                                    display: "none",
                                },
                            }}
                            variant="body2"
                            color="inherit"
                            component="div"
                            fontWeight="bold"
                            marginTop={0}
                            marginRight={2}
                        >
                            Hello, Bruno Maria!
                        </Typography>
                        <Avatar>BM</Avatar>
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
