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
    const [selectedApplicationType, setSelectedApplicationType] = useState<"vertical" | "horizontal" | "sector" | null>(null);

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
    const [selectedOperationSupplyChainType, setSelectedOperationSupplyChainType] = useState<
        "procurement" | "logistics-&-supply-chain" | "hospitality-&-guest-services" | null
    >(null);
    const [selectedCustomerRevenueType, setSelectedCustomerRevenueType] = useState<
        "sales-&-marketing" | "customer-support" | "product-development" | null
    >(null);

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
    }, [
        selectedSectorType,
        selectedCustomerRevenueType,
        selectedOperationSupplyChainType,
        selectedCoreOperationType,
        selectedHorizontalType,
    ]);

    return (
        <Box marginX="auto" sx={{ maxWidth: "1350px" }}>
            {/* APPBAR */}
            <AppBarWithDrawer appTitle="Shape the future<br />with confidence" drawerItems={[]} />

            {/* SEARCHBAR WITH MODAL FOR STARTUP DETAILS */}
            <SearchBar
                startups={startups}
                placeholder="Enter a keyword, or a sentence to find a startup..."
                setSelectedStartup={(startup) => router.push(`/startup/${startup.id}`)}
            />

            {/* BREADCRUMB */}
            <Box sx={{ backgroundColor: "#2E2E38" }} padding={5} display="flex" justifyContent="space-between" alignItems="center">
                <Breadcrumbs separator={<Typography sx={{ color: "white", fontWeight: "bold" }}>/</Typography>}>
                    <Box sx={{ ":hover": { cursor: "pointer" }, display: "flex", alignItems: "center" }} onClick={resetAll}>
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
                        <StyledBreadcrumb onClick={resetVerticalTypes} component="div" label={selectedVerticalType?.replaceAll("-", " ")} />
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
                    {selectedSectorType ? <StyledBreadcrumb component="div" label={selectedSectorType?.replaceAll("-", " ")} /> : undefined}

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

            {/* FIRST LEVEL FILTERING */}
            {!selectedApplicationType ? <ApplicationType setSelectedApplicationType={setSelectedApplicationType} /> : <></>}

            {/* SECOND LEVEL FILTERING */}
            {selectedApplicationType === "vertical" && !selectedVerticalType ? (
                <VerticalType setSelectedVerticalType={setSelectedVerticalType} />
            ) : (
                <></>
            )}
            {selectedApplicationType === "horizontal" && !selectedHorizontalType ? (
                <HorizontalType setSelectedHorizontalType={setSelectedHorizontalType} />
            ) : (
                <></>
            )}
            {selectedApplicationType === "sector" && !selectedSectorType ? (
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
        </Box>
    );
}
