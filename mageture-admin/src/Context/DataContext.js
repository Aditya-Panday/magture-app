import React, { createContext, useState } from "react";

const DataContext = createContext();
export default function DataContextProvider({ children }) {
    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(false)

    return (
        <DataContext.Provider value={{ token, setToken, loading, setLoading }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext };