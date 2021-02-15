import React from "react"

export function withSuspense(Component) {
    return (props) => {
        return(
        <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </React.Suspense>
        )
    }
}