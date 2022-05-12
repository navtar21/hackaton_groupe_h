import { createContext, useMemo, useState, useContext } from "react";

const ValueContext = createContext();
ValueContext.displayName = "ValueContext";

export const useValue = () => {
    const context = useContext(ValueContext);

    if (context === undefined) {
        throw new Error("useValue must be used within a ContextProvider");
    }
    return context;
};

const ValueProvider = ({ children }) => {
    const [val, setVal] = useState(null);

    const valueObject = useMemo(() => {
        return { val, setVal };
    }, [val, setVal]);

    return (
        <ValueContext.Provider value={valueObject}>
            {children}
        </ValueContext.Provider>
    );
};

export default ValueProvider;
