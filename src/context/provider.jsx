import { AppContext } from "./index";
import { initialState } from "./state";


export const AppProvider = ({ children }) => {
    const state = initialState();
    return(
        <AppContext.Provider value={state}>
            { children }
        </AppContext.Provider>
    )
}