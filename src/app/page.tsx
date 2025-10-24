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
                        <Typography marginX="auto" maxWidth="80%" textAlign="center" variant="h2" color="secondary" fontWeight="bold" marginTop={15} marginBottom={3}>
                            Tech companies per attività di
                            Open Innovation con EY
                        </Typography>
                        <SearchBar
                            startups={startups}
                            placeholder="Digita qui il nome della tech company su cui desideri maggiori informazioni"
                            setSelectedStartup={(startup) => router.push(`/startup/${startup.id}`)}
                        />
                    </Box>
                </Box>

                {/* WEB SITE DESCRIPTION */}
                <Box sx={{ padding: 5 }}>
                    <Typography
                        marginX="auto"
                        fontWeight="bold"
                        maxWidth="80%"
                        textAlign="center"
                        variant="body1"
                        color="white"
                        marginTop={3}
                        marginBottom={3}>
                        Abbiamo selezionato e categorizzato alcune tech companies italiane che
                        sviluppano soluzioni basate su Intelligenza Artificiale, con potenziale
                        rilevanza per EY e i suoi clienti. Le aziende sono organizzate in tre
                        categorie (Soluzioni Verticali, Soluzioni Orizzontali, Soluzioni Settoriali).
                    </Typography>
                </Box>

                {/* BREADCRUMB */}
                <Box sx={{ backgroundColor: "#2E2E38" }}>
                    <Box
                        sx={{ mx: "auto", maxWidth: "1350px" }}
                        paddingY={5}
                        paddingX={5}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Breadcrumbs separator={<Typography sx={{ color: "white", fontWeight: "bold" }}>/</Typography>}>
                            <Box sx={{ zIndex: 9999, ":hover": { cursor: "pointer" }, display: "flex", alignItems: "center" }} onClick={resetAll}>
                                <HomeIcon sx={{ mr: 0.5, color: "white" }} fontSize="medium" />
                            </Box>

                            {/* FIRST LEVEL FILTERING */}
                            {selectedApplicationType ? (
                                <StyledBreadcrumb
                                    onClick={resetApplicationTypes}
                                    component="div"
                                    label={selectedApplicationType?.replaceAll("-", " ")}
                                />
                            ) : undefined}

                            {/* SECOND LEVEL FILTERING */}
                            {selectedVerticalType ? (
                                <StyledBreadcrumb
                                    onClick={resetVerticalTypes}
                                    component="div"
                                    label={selectedVerticalType?.replaceAll("-", " ")}
                                />
                            ) : undefined}
                            {selectedHorizontalType ? (
                                <StyledBreadcrumb
                                    onClick={() => {
                                        /* to do */
                                    }}
                                    component="div"
                                    label={selectedHorizontalType?.replaceAll("-", " ")}
                                />
                            ) : undefined}
                            {selectedSectorType ? (
                                <StyledBreadcrumb component="div" label={selectedSectorType?.replaceAll("-", " ")} />
                            ) : undefined}

                            {/* THIRD LEVEL FILTERING */}
                            {selectedCoreOperationType ? (
                                <StyledBreadcrumb component="div" label={selectedCoreOperationType?.replaceAll("-", " ")} />
                            ) : undefined}
                            {selectedOperationSupplyChainType ? (
                                <StyledBreadcrumb component="div" label={selectedOperationSupplyChainType?.replaceAll("-", " ")} />
                            ) : undefined}
                            {selectedCustomerRevenueType ? (
                                <StyledBreadcrumb component="div" label={selectedCustomerRevenueType?.replaceAll("-", " ")} />
                            ) : undefined}
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
                    <StartupList onStartupClick={(startup) => router.push(`/startup/${startup.id}`)} filteredStartups={startups} />
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
