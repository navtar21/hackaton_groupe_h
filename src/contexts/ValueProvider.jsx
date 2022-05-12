import { createContext, useMemo, useState, useContext } from "react";

const ValueContext = createContext();
ValueContext.displayName = "ValueContext";

export const useValue = () => {
    const context = useContext(ValueContext);
    if (context === undefined) {
        throw new Error("useValue must be used within a ValueProvider");
    }
    return context;
};

const ValueProvider = ({ children }) => {
    const [val, setVal] = useState("test");

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
