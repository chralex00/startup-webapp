"use client";

import React, { useEffect, useRef, useState } from "react";
import { TextField, InputAdornment, Menu, MenuItem, Avatar, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Startup } from "@/interfaces/startup";

export interface SearchBarProps {
    placeholder: string;
    startups: Startup[];
    setSelectedStartup: (Startup: Startup) => void;
}

export default function SearchBar(props: SearchBarProps): React.JSX.Element {
    const [query, setQuery] = useState<string>("");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredStartups = props.startups.filter((s: Startup) => s.name.toLowerCase().includes(query.toLowerCase()));

    const open = Boolean(anchorEl) && filteredStartups.length > 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        if (value.trim()) {
            setAnchorEl(event.currentTarget);
        } else {
            setAnchorEl(null);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (open && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
        }
    }, [open]);

    return (
        <Box display="flex" justifyContent="center">
            <TextField
                fullWidth
                className="animate__animated animate__fadeInDown"
                variant="outlined"
                placeholder={props.placeholder}
                value={query}
                inputRef={inputRef}
                onChange={handleChange}
                sx={{
                    marginBottom: 2,
                    minWidth: "300px",
                    maxWidth: "80%",
                    backgroundColor: "#DFDFDF",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                    },
                }}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon color="action" />
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <Menu
                disableAutoFocusItem
                disableEnforceFocus
                disableRestoreFocus
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                slotProps={{
                    paper: {
                        sx: {
                            minWidth: "300px",
                            width: "45%",
                            maxWidth: "1200px",
                        },
                    },
                }}
            >
                {filteredStartups.map((startup) => (
                    <MenuItem
                        key={startup.id}
                        onClick={() => {
                            props.setSelectedStartup(startup);
                            handleClose();
                        }}
                    >
                        <Avatar
                            src={`/logos/${startup.logo}`}
                            variant="square"
                            sx={{
                                backgroundColor: "#000",
                                borderRadius: 2,
                                padding: "5px",
                                width: "auto",
                                height: 35,
                                mr: 1,
                                "& img": {
                                    objectFit: "cover",
                                },
                            }}
                        />
                        {startup.name}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
