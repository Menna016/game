import React from 'react'
import { Blocks, CirclesWithBar } from 'react-loader-spinner';

export default function Loading() {
    return (
        <>
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 z-3">
                <Blocks
                    height="200"
                    width="200"
                    color="#4fa94d"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    visible={true}
                />
            </div>
        </>
    )
}
