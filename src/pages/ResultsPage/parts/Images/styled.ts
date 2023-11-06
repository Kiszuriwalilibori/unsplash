import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ImageContainer = styled(Box)(({ theme }) => ({
    zIndex: 1000,
    position: "relative",
    cursor: "zoom-in",
    "&:hover": {
        maskImage:
            "linear-gradient(180deg,rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0.9) 3.5%, rgba(0, 0, 0, 0.89) 7%,\n            rgba(0, 0, 0, 0.88) 10.35%,\n            rgba(0, 0, 0, 0.87) 13.85%,\n            rgba(0, 0, 0, 0.86) 17.35%,\n            rgba(0, 0, 0, 0.85) 20.85%,\n            rgba(0, 0, 0, 0.84) 24.35%,\n            rgba(0, 0, 0, 0.83) 27.85%,\n            rgba(0, 0, 0, 0.82) 31.35%,\n            rgba(0, 0, 0, 0.81) 34.85%,\n            rgba(0, 0, 0, 0.8) 38.35%,\n            rgba(0, 0, 0, 0.79) 41.85%,\n            rgba(0, 0, 0, 0.78) 45.35%,\n            rgba(0, 0, 0, 0.77) 48.85%,\n            rgba(0, 0, 0, 0.76) 52.35%,\n            rgba(0, 0, 0, 0.77) 55.85%,\n            rgba(0, 0, 0, 0.78) 59.35%,\n            rgba(0, 0, 0, 0.79) 62.85%,\n            rgba(0, 0, 0, 0.8) 66.35%,\n            rgba(0, 0, 0, 0.81) 69.85%,\n            rgba(0, 0, 0, 0.82) 73.35%,\n            rgba(0, 0, 0, 0.83) 76.85%,\n            rgba(0, 0, 0, 0.84) 80.35%,\n            rgba(0, 0, 0, 0.85) 83.85%,\n            rgba(0, 0, 0, 0.86) 87.35%,\n            rgba(0, 0, 0, 0.87) 90.85%,\n            rgba(0, 0, 0, 0.88) 94.35%, rgba(0, 0, 0, 0.89) 97.85%, rgba(0, 0, 0, 0.9))",
        "&::after": {
            content: "attr(data-description)",
            position: "absolute",
            top: theme.spacing(-1),
            left: "0",
            zIndex: 2000,
            padding: "1rem 1rem 0 1rem",
            color: "white",
            fontSize: "18px",
            width: "calc(100% - 48px)",
        },
        "&::before": {
            content: "attr(data-user)",
            position: "absolute",
            bottom: theme.spacing(1),
            left: "0",
            zIndex: 2000,
            padding: "0 0 0 1rem",
            color: "white",
            fontSize: "18px",
            width: "100%",
        },
    },
}));

export const SubjectStyle = styled("h1")(({ theme }) => ({
    maxWidth: "1320px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    position: "relative",
    paddingLeft: theme.spacing(1.5),
    fontSize: "28px",
    lineHeight: 1.2,
    fontWeight: 700,
    color: "#111",
}));
