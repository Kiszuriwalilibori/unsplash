import { useSnackbar } from "notistack";

const useMessage = () => {
    const { enqueueSnackbar } = useSnackbar();

    const showMessage = {
        info: function (str: string) {
            enqueueSnackbar(str, { variant: "info" });
        },

        error: function (str: string) {
            enqueueSnackbar(str, { variant: "error" });
        },

        success: function (str: string) {
            enqueueSnackbar(str, { variant: "success" });
        },

        warning: function (str: string) {
            enqueueSnackbar(str, { variant: "warning" });
        },
    };

    return showMessage;
};

export default useMessage;
export type ShowMessage = ReturnType<typeof useMessage>;
