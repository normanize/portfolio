import { useLayoutEffect } from 'react'

import Header from '../components/contents/Header'
import Overview from '../components/contents/Overview'
import AboutMe from '../components/contents/AboutMe'
import Projects from '../components/contents/Projects'
import Footer from '../components/contents/Footer'

const App = () => {

    return (
        <main>
            {/** App Header */}
            <Header />

            {/** Overview Section*/}
            <Overview />

            {/** About me Section */}
            <AboutMe />

            {/** Projects Section */}
            <Projects />

            {/** App Footer */}
            <Footer />
        </main>
    );
};

export default App;