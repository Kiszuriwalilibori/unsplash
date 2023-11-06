import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Tag = styled("button")(({ theme }) => ({
    backgroundColor: "#eee",
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    borderRadius: "2px",
    textDecoration: "none",
    fontSize: "14px",
    transition: "all 0.1s ease-in-out",
    textTransform: "capitalize",
    height: theme.spacing(3.25),
    display: "inline-block",
    color: "#767676",
    border: "none",
    cursor: "pointer",
    "&:disabled, &[disabled]": { opacity: 0.34, cursor: "default" },
    "&:hover:enabled": {
        backgroundColor: "#e1e1e1",
        color: "#111",
    },
}));

export const ImageFigCaption = styled("figcaption")(({ theme }) => ({
    visibility: "hidden",
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1),
}));

export const Loading = styled(Box)(({ theme }) => ({
    textAlign: "center",
    fontSize: "2rem",
    "&:after": { content: '" ."', animation: "dots 1s steps(5, end) infinite" },

    "@keyframes dots": {
        "0%, 20%": {
            color: "rgba(0, 0, 0, 0)",
            textShadow: "0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0)",
        },
        "40%": {
            color: "black",
            textShadow: "0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0)",
        },
        "60%": { textShadow: "0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0)" },
        "80%,   100%": { textShadow: "0.25em 0 0 black, 0.5em 0 0 black" },
    },
}));

export const ImagesContentWrapper = styled("section")(({ theme }) => ({
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    maxWidth: "1320px",
    marginLeft: "auto",
    marginRight: "auto",
}));

export const FormContainer = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    maxWidth: "1320px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "12px",
}));
