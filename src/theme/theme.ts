"use client";

import { ThemeOptions, createTheme } from "@mui/material";
import localFont from "next/font/local";

const EYInterstateRegular = localFont({
    src: "./fonts/ey-interstate-regular.ttf",
    display: "swap",
});

const EYInterstateItalic = localFont({
    src: "./fonts/ey-interstate-italic.ttf",
    display: "swap",
});

const EYInterstateLight = localFont({
    src: "./fonts/ey-interstate-light.ttf",
    display: "swap",
});

const EYInterstateLightItalic = localFont({
    src: "./fonts/ey-interstate-lightitalic.ttf",
    display: "swap",
});

const EYInterstateLightBold = localFont({
    src: "./fonts/ey-interstate-lightbold.ttf",
    display: "swap",
});

const EYInterstateLightBoldItalic = localFont({
    src: "./fonts/ey-interstate-lightbolditalic.ttf",
    display: "swap",
});

const EYInterstateBold = localFont({
    src: "./fonts/ey-interstate-bold.ttf",
    display: "swap",
});

const EYInterstateBoldItalic = localFont({
    src: "./fonts/ey-interstate-bolditalic.ttf",
    display: "swap",
});

const overrideBorderRadius = {
    styleOverrides: {
        root: {
            borderRadius: "unset",
        },
    },
};

const theme: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: "#1A1A24",
            dark: "#09090C",
            light: "#3A3A45",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#FFE600",
            dark: "#FED200",
            light: "#FEE83D",
            contrastText: "#1A1A24",
        },
        error: {
            main: "#B9251C",
            dark: "#811913",
            light: "#C75049",
            contrastText: "#FFFFFF",
        },
        warning: {
            main: "#ED6500",
            dark: "#A54600",
            light: "#F08333",
            contrastText: "#FFFFFF",
        },
        info: {
            main: "#155CB4",
            dark: "#0E407D",
            light: "#437CC3",
            contrastText: "#FFFFFF",
        },
        success: {
            main: "#168736",
            dark: "#0F5E25",
            light: "#449F5E",
            contrastText: "#FFFFFF",
        },
        background: {
            default: "#000",
            paper: "#FFFFFF",
        },
        action: {
            active: "#1A1A24",
            hover: "rgba(26, 26, 36, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(26, 26, 36, 0.08)",
            selectedOpacity: 0.08,
            focus: "rgba(26, 26, 36, 0.12)",
            focusOpacity: 0.12,
            disabled: "rgba(26, 26, 36, 0.6)",
            disabledOpacity: 0.6,
            disabledBackground: "rgba(26, 26, 36, 0.12)",
        },
        text: {
            primary: "#1A1A24",
            secondary: "rgba(26, 26, 36, 0.6)",
            disabled: "rgba(26, 26, 36, 0.6)",
        },
    },
    typography: {
        fontFamily: ["EYInterstate", "Roboto", "sans-serif"].join(","),
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    "@font-face": {
                        fontFamily: "EYInterstate",
                        src: `url(${EYInterstateRegular}) format("truetype")`,
                        fontWeight: "400",
                        fontStyle: "normal",
                    },
                    fallbacks: [
                        {
                            "@font-face": {
                                fontFamily: "EYInterstate",
                                src: `url(${EYInterstateItalic}) format("truetype")`,
                                fontWeight: "400",
                                fontStyle: "italic",
                            },
                        },
                        {
                            "@font-face": {
                                fontFamily: "EYInterstate",
                                src: `url(${EYInterstateLight}) format("truetype")`,
                                fontWeight: "300",
                                fontStyle: "normal",
                            },
                        },
                        {
                            "@font-face": {
                                fontFamily: "EYInterstate",
                                src: `url(${EYInterstateLightItalic}) format("truetype")`,
                                fontWeight: "300",
                                fontStyle: "italic",
                            },
                        },
                        {
                            "@font-face": {
                                fontFamily: "EYInterstate",
                                src: `url(${EYInterstateLightBold}) format("truetype")`,
                                fontWeight: "500",
                                fontStyle: "normal",
                            },
                        },
                        {
                            "@font-face": {
                                fontFamily: "EYInterstate",
                                src: `url(${EYInterstateLightBoldItalic}) format("truetype")`,
                                fontWeight: "500",
                                fontStyle: "italic",
                            },
                        },
                        {
                            "@font-face": {
                                fontFamily: "EYInterstate",
                                src: `url(${EYInterstateBold}) format("truetype")`,
                                fontWeight: "bold",
                                fontStyle: "normal",
                            },
                        },
                        {
                            "@font-face": {
                                fontFamily: "EYInterstate",
                                src: `url(${EYInterstateBoldItalic}) format("truetype")`,
                                fontWeight: "bold",
                                fontStyle: "italic",
                            },
                        },
                    ],
                },
            },
            variants: [
                {
                    props: { variant: "h1" },
                    style: {
                        lineHeight: "116.7%",
                        fontSize: "96px",
                        fontWeight: "300",
                        letterSpacing: "-1.5px",
                    },
                },
                {
                    props: { variant: "h2" },
                    style: {
                        lineHeight: "120%",
                        fontSize: "60px",
                        fontWeight: "300",
                        letterSpacing: "-0.5px",
                    },
                },
                {
                    props: { variant: "h3" },
                    style: {
                        lineHeight: "116.7%",
                        fontSize: "48px",
                        fontWeight: "400",
                        letterSpacing: "0",
                    },
                },
                {
                    props: { variant: "h4" },
                    style: {
                        lineHeight: "123.5%",
                        fontSize: "34px",
                        fontWeight: "400",
                        letterSpacing: "0.5px",
                    },
                },
                {
                    props: { variant: "h5" },
                    style: {
                        lineHeight: "133.4%",
                        fontSize: "24px",
                        fontWeight: "400",
                        letterSpacing: "0px",
                    },
                },
                {
                    props: { variant: "h6" },
                    style: {
                        lineHeight: "160%",
                        fontSize: "20px",
                        fontWeight: "500",
                        letterSpacing: "0.15px",
                    },
                },
                {
                    props: { variant: "subtitle1" },
                    style: {
                        lineHeight: "175%",
                        fontSize: "16px",
                        fontWeight: "400",
                        letterSpacing: "0.15px",
                    },
                },
                {
                    props: { variant: "subtitle2" },
                    style: {
                        lineHeight: "157%",
                        fontSize: "14px",
                        fontWeight: "400",
                        letterSpacing: "0.1px",
                    },
                },
                {
                    props: { variant: "body1" },
                    style: {
                        lineHeight: "150%",
                        fontSize: "16px",
                        fontWeight: "300",
                        letterSpacing: "0.15px",
                    },
                },
                {
                    props: { variant: "body2" },
                    style: {
                        lineHeight: "143%",
                        fontSize: "14px",
                        fontWeight: "300",
                        letterSpacing: "0.17px",
                    },
                },
                {
                    props: { variant: "overline" },
                    style: {
                        lineHeight: "266%",
                        fontSize: "12px",
                        fontWeight: "400",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                    },
                },
                {
                    props: { variant: "caption" },
                    style: {
                        lineHeight: "166%",
                        fontSize: "12px",
                        fontWeight: "400",
                        letterSpacing: "0.4px",
                    },
                },
            ],
        },
        MuiRating: {
            styleOverrides: {
                root: {
                    color: "#1A1A24",
                    "& .MuiRating-iconFilled": {
                        color: "#FFE600",
                    },
                    "& .MuiRating-iconEmpty": {
                        opacity: "23%",
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: "300",
                },
            },
            variants: [
                {
                    props: { color: "default", variant: "filled" },
                    style: {
                        backgroundColor: "rgba(26, 26, 36, 0.08)",
                    },
                },
                {
                    props: { color: "default", variant: "outlined" },
                    style: {
                        backgroundColor: "white",
                    },
                },
            ],
        },
        MuiButton: {
            ...overrideBorderRadius,
            variants: [
                {
                    props: { color: "primary" },
                    style: {
                        "&:hover": {
                            backgroundColor: "rgba(26, 26, 36, 0.04)",
                            color: "#09090C",
                        },
                    },
                },
                {
                    props: { color: "secondary", variant: "contained" },
                    style: {
                        "&:hover": {
                            backgroundColor: "rgba(255, 230, 0, 0.04)",
                            color: "#09090C",
                        },
                    },
                },
            ],
        },
        MuiToggleButton: {
            ...overrideBorderRadius,
        },
        MuiPaper: {
            ...overrideBorderRadius,
        },
        MuiOutlinedInput: {
            ...overrideBorderRadius,
        },
        MuiFilledInput: {
            ...overrideBorderRadius,
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontWeight: "300",
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontWeight: "300",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    // boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)' // original
                },
            },
        },
    },
});

export default theme;
