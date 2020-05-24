import React from 'react'
import { renderToString } from 'react-dom/server'
import { BrowserRouter, Route, StaticRouter, Switch, useLocation } from 'react-router-dom'
import Home from '../Home'
import NoPages from '../NoPages'


/**
 * This provider match all props from symfony Limenius bundle, and "context" for React's component
 * 
 * @returns React.Context
 */
const SFContext = React.createContext({
    context: {
        serverSide: Boolean,
        href: String,
        location: String,
        scheme: String,
        host: String,
        port: Number,
        base: String,
        pathname: String,
        search: String
    },
    initialProps: {}
})


/**
 *
 *
 * @param {*} props
 * @param {*} railsContext
 * @returns JSX.Element
 */
function App(props, railsContext) {
    if (railsContext.serverSide) {
        const renderedHtml = renderToString(<Page initialProps={props} context={railsContext} />);
        return { renderedHtml };
    } else {
        return <Page initialProps={props} context={railsContext} />;
    }
}


/**
 *
 *
 * @param {*} { context, initialProps }
 * @returns JSX.Element
 */
function Page({ context, initialProps }) {

    if (context.serverSide) {

        return (
            <StaticRouter
                basename={context.base}
                location={context.location}
                context={{}}>
                <SFContext.Provider value={{ context, initialProps }} >
                    <Routes />
                </SFContext.Provider>
            </StaticRouter>
        )
    } else {

        return (
            <BrowserRouter basename={context.base}>
                <SFContext.Provider value={{ context, initialProps }} >
                    <Routes />
                </SFContext.Provider>
            </BrowserRouter>
        )
    }
}

/**
 * Match all routes, and return the exact component
 *
 * @returns JSX.Element
 */
function Routes() {

    const { pathname } = useLocation();

    return (
        <Switch>
            <Route path="/" component={Home} /> {/* here the trick */}
            <Route path={pathname} component={NoPages} />
        </Switch>
    )
}

export default App;
export { SFContext };

