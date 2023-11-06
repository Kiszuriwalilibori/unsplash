import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ResultsPageFormContainer = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1.5),
    maxWidth: "1320px",
    marginLeft: "auto",
    marginRight: "auto",
}));

export const ResultsPageContainer = styled(Box)(({ theme }) => ({
    margin: "0",
    padding: "0",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.common.white,
}));
