import * as React from "react";

import { connect } from "react-redux";

import { Header, Trending } from "./parts";
import { ErrorMessage, Form, InitialScreen } from "components";
import { trending } from "js/fixtures";
import { useCheckApiKey, useDispatchAction } from "hooks";
import { RootState } from "components/AppProvider";
import Stack from "@mui/material/Stack";

interface Props {
    isWithTemporaryBackground: boolean;
}

const SearchPage = (props: Props) => {
    const { isWithTemporaryBackground } = props;
    const isKeyAvailable = useCheckApiKey();
    const { clearHints } = useDispatchAction();

    React.useEffect(() => {
        clearHints();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isWithTemporaryBackground) return <InitialScreen />;
    return (
        <div className="search">
            <Header />
            {isKeyAvailable && (
                <Stack spacing={3}>
                    <Form />
                    <Trending ary={trending} />
                </Stack>
            )}
            <ErrorMessage />
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    isWithTemporaryBackground: state.temporaryBackground.isVisible,
});

export default connect(mapStateToProps, {})(SearchPage);
