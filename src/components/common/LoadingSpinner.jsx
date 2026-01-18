import React from 'react';

const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[50vh]">
        <div className="relative">
            <div className="w-12 h-12 rounded-full border-4 border-[var(--color-primary)]/30 border-t-[var(--color-primary)] animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse"></div>
            </div>
        </div>
    </div>
);

export default LoadingSpinner;
