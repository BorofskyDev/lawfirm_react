import React from 'react'
import HeroSection from './HomeSection'

import { homeObjOne } from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />

        </>
    )
}

export default Home
