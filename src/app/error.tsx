"use client";

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
    return (
        <div>
            {error.message}
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default ErrorPage;
