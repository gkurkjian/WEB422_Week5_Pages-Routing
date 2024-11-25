import Link from "next/link";

export default function LayoutDynamic(props) {
    return (
        <>
            <h3>LayoutDynamic.js Routing Practice</h3>
            <Link href={"/"}>Home</Link> | <Link href={"/about"}>About</Link>
            <hr />
            <br />
            {props.children}
            <br /><br />
            <hr />
            Footer
        </>
    )
}