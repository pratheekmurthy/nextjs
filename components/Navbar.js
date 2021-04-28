import Link from 'next/link'

const Navbar =(props)=>{
    return (<div>
        <Link href="/"><a>Home</a></Link> &nbsp;
        <Link href="/pratheek"><a>pratheek</a></Link>&nbsp;
        <Link href="/about"><a>about</a></Link> &nbsp;
    </div>)
}

export default Navbar