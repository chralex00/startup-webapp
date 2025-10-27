"use client";

import AppBarWithDrawer from "@/components/AppBarWithDrawer";
import SearchBar from "@/components/SearchBar";
import { startups } from "@/data/startups";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import ApplicationType from "@/components/ApplicationType";
import VerticalType from "@/components/VerticalType";
import { Box, Breadcrumbs, Chip, emphasize, styled, Typography } from "@mui/material";
import CoreOperationsType from "@/components/CoreOperationsType";
import OperationSupplyChainType from "@/components/OperationSupplyChainType";
import CustomerRevenueType from "@/components/CustomerRevenueType";
import HorizontalType from "@/components/HorizontalType";
import SectorType from "@/components/SectorType";
import StartupList from "@/components/StartupList";
import { useRouter } from "next/navigation";
import AppFooter from "@/components/AppFooter";
import TeamSection from "@/components/TeamSection";
import { Startup } from "@/interfaces/startup";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: (theme.vars || theme).palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        textTransform: "capitalize",
        "&:hover": {
            cursor: "pointer",
        },
        "&:hover, &:focus": {
            backgroundColor: emphasize(theme.palette.grey[100], 0.06),
            ...theme.applyStyles("dark", {
                backgroundColor: emphasize(theme.palette.grey[800], 0.06),
            }),
        },
        "&:active": {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[100], 0.12),
            ...theme.applyStyles("dark", {
                backgroundColor: emphasize(theme.palette.grey[800], 0.12),
            }),
        },
        ...theme.applyStyles("dark", {
            backgroundColor: theme.palette.grey[800],
        }),
        marginY: "100px !important",
    };
}) as typeof Chip;

export default function Home() {
    const router = useRouter();

    const [isFilteredStartupListVisible, setIsFilteredStartupListVisible] = useState<boolean>(false);

    // first level filtering
    const [selectedApplicationType, setSelectedApplicationType] = useState<
        "soluzioni-verticali" | "soluzioni-orizzontali" | "soluzioni-settoriali" | null
    >(null);

    // second level filtering
    const [selectedVerticalType, setSelectedVerticalType] = useState<
        "core-operations" | "operations-and-supply-chain" | "customer-and-revenue" | null
    >(null);
    const [selectedHorizontalType, setSelectedHorizontalType] = useState<
        "ai-automation-&-workflows" | "data-analytics-knowledge-management" | "collaboration-&-organizational-communication" | null
    >(null);
    const [selectedSectorType, setSelectedSectorType] = useState<
        | "industrial-&-mobility"
        | "consumer-product-&-retail"
        | "energy-&-resources"
        | "financial-services"
        | "government-&-infrastructure"
        | "health-&-life-sciences"
        | "technology-media-&-telecom"
        | "private-equity"
        | "education"
        | null
    >(null);

    // third level filtering
    const [selectedCoreOperationType, setSelectedCoreOperationType] = useState<
        "finance" | "hr-&-people-ops" | "legal-&-compliance" | "it-&-infrastructure" | null
    >(null);
    const [selectedOperationSupplyChainType, setSelectedOperationSupplyChainType] = useState<"procurement" | "logistics" | null>(null);
    const [selectedCustomerRevenueType, setSelectedCustomerRevenueType] = useState<
        "sales-&-marketing" | "customer-support" | "product-development" | null
    >(null);

    // startups
    const [filteredStartups, setFilteredStartups] = useState<Startup[]>([]);

    const filterStartups = (): void => {
        let list = [...startups];

        // application type
        if (selectedApplicationType === "soluzioni-verticali") {
            list = list.filter((startup) => !!startup.vertical);
        } else if (selectedApplicationType === "soluzioni-orizzontali") {
            list = list.filter((startup) => !!startup.horizontal);
        }

        // vertical type
        if (selectedVerticalType === "core-operations") {
            list = list.filter((startup) => startup.verticalType === "Core operations");
        } else if (selectedVerticalType === "customer-and-revenue") {
            list = list.filter((startup) => startup.verticalType === "Revenue and customer functions");
        } else if (selectedVerticalType === "operations-and-supply-chain") {
            list = list.filter((startup) => startup.verticalType === "Supply chain");
        }

        // horizontal type
        if (selectedHorizontalType === "ai-automation-&-workflows") {
            list = list.filter((startup) => startup.horizontalType?.includes("AI, Automation & Workflow"));
        } else if (selectedHorizontalType === "data-analytics-knowledge-management") {
            list = list.filter((startup) => startup.horizontalType?.includes("Data, Analytics & Knowledge Management"));
        } else if (selectedHorizontalType === "collaboration-&-organizational-communication") {
            list = list.filter((startup) => startup.horizontalType?.includes("Organizational Communication"));
        }

        // vertical subtype - core operations
        if (selectedCoreOperationType === "finance") {
            list = list.filter((startup) => startup.verticalSubtype === "Finance");
        } else if (selectedCoreOperationType === "hr-&-people-ops") {
            list = list.filter((startup) => startup.verticalSubtype === "HR");
        } else if (selectedCoreOperationType === "it-&-infrastructure") {
            list = list.filter((startup) => startup.verticalSubtype === "IT & Infrastructure");
        } else if (selectedCoreOperationType === "legal-&-compliance") {
            list = list.filter((startup) => startup.verticalSubtype === "Legal & Compliance");
        }

        // vertical subtype - customer & revenue
        if (selectedCustomerRevenueType === "customer-support") {
            list = list.filter((startup) => startup.verticalSubtype === "Customer support");
        } else if (selectedCustomerRevenueType === "product-development") {
            list = list.filter((startup) => startup.verticalSubtype === "Product development");
        } else if (selectedCustomerRevenueType === "sales-&-marketing") {
            list = list.filter((startup) => startup.verticalSubtype === "Sales & marketing");
        }

        // vertical subtype - operation & supply chain
        if (selectedOperationSupplyChainType === "logistics") {
            list = list.filter((startup) => startup.verticalSubtype === "Logistics");
        } else if (selectedOperationSupplyChainType === "procurement") {
            list = list.filter((startup) => startup.verticalSubtype === "Procurement");
        }

        // sectors
        if (selectedSectorType === "consumer-product-&-retail") {
            list = list.filter((startup) => startup.sectors?.includes("Consumer Products"));
        } else if (selectedSectorType === "education") {
            list = list.filter((startup) => startup.sectors?.includes("Education"));
        } else if (selectedSectorType === "energy-&-resources") {
            list = list.filter((startup) => startup.sectors?.includes("Energy & Resources"));
        } else if (selectedSectorType === "financial-services") {
            list = list.filter((startup) => startup.sectors?.includes("Financial Services"));
        } else if (selectedSectorType === "government-&-infrastructure") {
            list = list.filter((startup) => startup.sectors?.includes("Government & Infrastructure"));
        } else if (selectedSectorType === "health-&-life-sciences") {
            list = list.filter((startup) => startup.sectors?.includes("Health & Life Sciences"));
        } else if (selectedSectorType === "industrial-&-mobility") {
            list = list.filter((startup) => startup.sectors?.includes("Industrial & Mobility"));
        } else if (selectedSectorType === "private-equity") {
            list = list.filter((startup) => startup.sectors?.includes("Equity"));
        } else if (selectedSectorType === "technology-media-&-telecom") {
            list = list.filter((startup) => startup.sectors?.includes("Technology"));
        }

        setFilteredStartups(list);
    };

    const getSearchParams = (): URLSearchParams => {
        return new URLSearchParams(window.location.search);
    };

    const resetApplicationTypes = (): void => {
        setSelectedHorizontalType(null);
        setSelectedVerticalType(null);
        setSelectedSectorType(null);

        setSelectedCoreOperationType(null);
        setSelectedOperationSupplyChainType(null);
        setSelectedCustomerRevenueType(null);
    };

    const resetVerticalTypes = (): void => {
        setSelectedCoreOperationType(null);
        setSelectedOperationSupplyChainType(null);
        setSelectedCustomerRevenueType(null);
    };

    const resetAll = (): void => {
        setSelectedApplicationType(null);

        setSelectedHorizontalType(null);
        setSelectedVerticalType(null);
        setSelectedSectorType(null);

        setSelectedCoreOperationType(null);
        setSelectedOperationSupplyChainType(null);
        setSelectedCustomerRevenueType(null);
    };

    useEffect(() => {
        if (isFilteredStartupListVisible === true) {
            setTimeout(() => {
                const target = document.querySelector("#filtersBreadcrumb");
                console.log(target);
                console.log(target?.scrollIntoView);
                target?.scrollIntoView?.({
                    behavior: "smooth",
                    block: "start",
                });
            }, 50);
        }
    }, [isFilteredStartupListVisible]);

    useEffect(() => {
        filterStartups();

        if (
            selectedSectorType ||
            selectedCustomerRevenueType ||
            selectedOperationSupplyChainType ||
            selectedCoreOperationType ||
            selectedHorizontalType
        ) {
            setIsFilteredStartupListVisible(true);
        } else {
            setIsFilteredStartupListVisible(false);
        }

        const searchParams = getSearchParams();
        const fromStartupDetails = searchParams.get("fromStartupDetails");

        if (fromStartupDetails) {
            const newSearchParams = new URLSearchParams(searchParams.toString());
            newSearchParams.delete("fromStartupDetails");

            const newUrl = `${window.location.pathname}${newSearchParams.toString() ? `?${newSearchParams.toString()}` : ""}`;
            router.replace(newUrl, { scroll: false });

            const savedFilters = localStorage.getItem("filtersStatus");

            if (savedFilters) {
                const parsed = JSON.parse(savedFilters ?? {});

                if (parsed.selectedSectorType !== undefined) {
                    setSelectedSectorType(parsed.selectedSectorType);
                }

                if (parsed.selectedCustomerRevenueType !== undefined) {
                    setSelectedCustomerRevenueType(parsed.selectedCustomerRevenueType);
                }

                if (parsed.selectedOperationSupplyChainType !== undefined) {
                    setSelectedOperationSupplyChainType(parsed.selectedOperationSupplyChainType);
                }

                if (parsed.selectedCoreOperationType !== undefined) {
                    setSelectedCoreOperationType(parsed.selectedCoreOperationType);
                }

                if (parsed.selectedHorizontalType !== undefined) {
                    setSelectedHorizontalType(parsed.selectedHorizontalType);
                }

                if (parsed.selectedApplicationType !== undefined) {
                    setSelectedApplicationType(parsed.selectedApplicationType);
                }

                if (parsed.selectedVerticalType !== undefined) {
                    setSelectedVerticalType(parsed.selectedVerticalType);
                }
            }
        } else {
            localStorage.setItem(
                "filtersStatus",
                JSON.stringify({
                    selectedApplicationType,
                    selectedSectorType,
                    selectedCustomerRevenueType,
                    selectedOperationSupplyChainType,
                    selectedCoreOperationType,
                    selectedHorizontalType,
                    selectedVerticalType,
                })
            );
        }
    }, [
        selectedApplicationType,
        selectedSectorType,
        selectedCustomerRevenueType,
        selectedOperationSupplyChainType,
        selectedCoreOperationType,
        selectedHorizontalType,
        selectedVerticalType,
    ]);

    return (
        <>
            {/* APPBAR */}
            <AppBarWithDrawer />

            <Box marginX="auto">
                {/* PAGE TITLE */}
                <Box
                    sx={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2293')",
                    }}
                    padding={5}
                >
                    <Box sx={{ mx: "auto", maxWidth: "80%" }}>
                        <Typography
                            marginX="auto"
                            maxWidth="80%"
                            textAlign="center"
                            variant="h2"
                            color="secondary"
                            fontWeight="bold"
                            marginTop={15}
                            marginBottom={3}
                            sx={{
                                maxWidth: {
                                    xs: "100%",
                                    md: "90%",
                                    lg: "80%",
                                },
                                fontSize: {
                                    xs: "25px",
                                    sm: "35px",
                                    md: "45px",
                                    lg: "55px",
                                },
                            }}
                        >
                            Tech companies per attività di Open Innovation con EY
                        </Typography>
                        <SearchBar
                            startups={startups}
                            placeholder="Digita qui il nome della tech company su cui desideri maggiori informazioni"
                            setSelectedStartup={(startup) => router.push(`/startup/${startup.id}`)}
                        />
                    </Box>
                </Box>

                {/* WEB SITE DESCRIPTION */}
                <Box sx={{ padding: "10px" }}>
                    <Typography
                        marginX="auto"
                        fontWeight="bold"
                        textAlign="center"
                        variant="body1"
                        color="white"
                        sx={{
                            padding: {
                                xs: 0,
                                md: 3,
                            },
                            maxWidth: {
                                xs: "100%",
                                md: "90%",
                            },
                            marginTop: {
                                xs: 0,
                                md: 3,
                            },
                            marginBottom: {
                                xs: 0,
                                md: 3,
                            },
                            lineHeight: {
                                xs: "18px",
                                md: "22px",
                            }
                        }}
                    >
                        Abbiamo selezionato e categorizzato alcune tech companies italiane che sviluppano soluzioni basate su Intelligenza
                        Artificiale, con potenziale rilevanza per EY e i suoi clienti. Le aziende sono organizzate in tre categorie
                        (Soluzioni Verticali, Soluzioni Orizzontali, Soluzioni Settoriali).
                    </Typography>
                </Box>

                {/* BREADCRUMB */}
                <Box
                    id="filtersBreadcrumb"
                    sx={{
                        backgroundColor: "#2E2E38",
                        width: "100%",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    {/* Fading effect on the right side (optional but nice UX) */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "40px",
                            height: "100%",
                            background: "linear-gradient(to left, #2E2E38, rgba(46,46,56,0))",
                            pointerEvents: "none",
                            zIndex: 2,
                        }}
                    />

                    <Box
                        sx={{
                            mx: "auto",
                            maxWidth: { xs: "100%", md: "1350px" },
                            py: { xs: 2, md: 5 },
                            px: { xs: 2, md: 5 },
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            overflowX: "auto",
                            flexWrap: "nowrap",
                            whiteSpace: "nowrap",
                            "&::-webkit-scrollbar": { display: "none" },
                            scrollbarWidth: "none",
                        }}
                    >
                        <Breadcrumbs
                            separator={
                                <Typography
                                    sx={{
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: { xs: "0.9rem", md: "1rem" },
                                    }}
                                >
                                    /
                                </Typography>
                            }
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "nowrap",
                                overflowX: "auto",
                                whiteSpace: "nowrap",
                                "&::-webkit-scrollbar": { display: "none" },
                                scrollbarWidth: "none",
                            }}
                        >
                            {/* HOME ICON */}
                            <Box
                                sx={{
                                    zIndex: 9999,
                                    ":hover": { cursor: "pointer" },
                                    display: "flex",
                                    alignItems: "center",
                                    flexShrink: 0,
                                }}
                                onClick={resetAll}
                            >
                                <HomeIcon sx={{ mr: 0.5, color: "white", fontSize: { xs: 20, md: 24 } }} />
                            </Box>

                            {/* FIRST LEVEL */}
                            {selectedApplicationType && (
                                <StyledBreadcrumb
                                    onClick={resetApplicationTypes}
                                    component="div"
                                    label={selectedApplicationType.replaceAll("-", " ")}
                                />
                            )}

                            {/* SECOND LEVEL */}
                            {selectedVerticalType && (
                                <StyledBreadcrumb
                                    onClick={resetVerticalTypes}
                                    component="div"
                                    label={selectedVerticalType.replaceAll("-", " ")}
                                />
                            )}

                            {selectedHorizontalType && (
                                <StyledBreadcrumb onClick={() => {}} component="div" label={selectedHorizontalType.replaceAll("-", " ")} />
                            )}

                            {selectedSectorType && <StyledBreadcrumb component="div" label={selectedSectorType.replaceAll("-", " ")} />}

                            {/* THIRD LEVEL */}
                            {selectedCoreOperationType && (
                                <StyledBreadcrumb component="div" label={selectedCoreOperationType.replaceAll("-", " ")} />
                            )}

                            {selectedOperationSupplyChainType && (
                                <StyledBreadcrumb component="div" label={selectedOperationSupplyChainType.replaceAll("-", " ")} />
                            )}

                            {selectedCustomerRevenueType && (
                                <StyledBreadcrumb component="div" label={selectedCustomerRevenueType.replaceAll("-", " ")} />
                            )}
                        </Breadcrumbs>
                    </Box>
                </Box>

                {/* FIRST LEVEL FILTERING */}
                {!selectedApplicationType ? <ApplicationType setSelectedApplicationType={setSelectedApplicationType} /> : <></>}

                {/* SECOND LEVEL FILTERING */}
                {selectedApplicationType === "soluzioni-verticali" && !selectedVerticalType ? (
                    <VerticalType setSelectedVerticalType={setSelectedVerticalType} />
                ) : (
                    <></>
                )}
                {selectedApplicationType === "soluzioni-orizzontali" && !selectedHorizontalType ? (
                    <HorizontalType setSelectedHorizontalType={setSelectedHorizontalType} />
                ) : (
                    <></>
                )}
                {selectedApplicationType === "soluzioni-settoriali" && !selectedSectorType ? (
                    <SectorType setSelectedSectorType={setSelectedSectorType} />
                ) : (
                    <></>
                )}

                {/* THIRD LEVEL FILTERING */}
                {selectedVerticalType === "core-operations" && !selectedCoreOperationType ? (
                    <CoreOperationsType setSelectedCoreOperationType={setSelectedCoreOperationType} />
                ) : (
                    <></>
                )}
                {selectedVerticalType === "operations-and-supply-chain" && !selectedOperationSupplyChainType ? (
                    <OperationSupplyChainType setSelectedOperationSupplyChainType={setSelectedOperationSupplyChainType} />
                ) : (
                    <></>
                )}
                {selectedVerticalType === "customer-and-revenue" && !selectedCustomerRevenueType ? (
                    <CustomerRevenueType setSelectedCustomerRevenueType={setSelectedCustomerRevenueType} />
                ) : (
                    <></>
                )}

                {/* STARTUP LIST */}
                {isFilteredStartupListVisible ? (
                    <StartupList onStartupClick={(startup) => router.push(`/startup/${startup.id}`)} filteredStartups={filteredStartups} />
                ) : (
                    <></>
                )}

                <TeamSection />
            </Box>

            {/* APPFOOTER */}
            <AppFooter />
        </>
    );
}
