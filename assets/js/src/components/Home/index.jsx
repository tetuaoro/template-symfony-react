import React, { useContext } from 'react'
import { SFContext } from '../App'

function Index() {
    const { initialProps } = useContext(SFContext);
    return (
        <div>
            <p>{initialProps}</p>
        </div>
    )
}

export default Index
