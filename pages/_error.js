function Error({ statusCode }) {
    return (
        <>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client!'}
        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
