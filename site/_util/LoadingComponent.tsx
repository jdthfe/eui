import React from 'react';
interface LoadingComponentProps {
    isLoading?: boolean;
    error?: boolean;
}
const LoadingComponent = (props: LoadingComponentProps) => {
    const { isLoading = false, error = false } = props;
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};

export default LoadingComponent;
