import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAppState } from "../../redux/features/appStateSlice";
const PageWrapper = ({ state, children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAppState(state));
    }, [state]);

    return (
        <div>PageWrapper</div>
    )
}

export default PageWrapper;