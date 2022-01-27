import React from 'react'
import Header from './Header'
import Contact from './Contact'
import Blurb from './Blurb'
import Footer from './Footer'

export default function Content() {
    return(
        <section className='body'>
            <section className='content'>
                < Header />
                < Contact />
                < Blurb />
                < Footer />
            </section>
        </section>
    )
}
