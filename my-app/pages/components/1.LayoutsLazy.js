export default function LayoutLazy(props) {
    return (
        <>
            <h3>LayoutLazy.js Routing Practice</h3>
            <a href="/">Home</a> | <a href="/about">About</a>
            <hr />
            <br />
            {props.children}
            <br /><br />
            <hr />
            Footer
        </>
    )
}