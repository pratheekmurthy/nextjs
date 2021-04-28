import Link from 'next/link'

const Navbar =(props)=>{
    return (<div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/pratheek"><a>pratheek</a></Link>
        <Link href="/about"><a>about</a></Link>
    </div>)
}

export default Navbar