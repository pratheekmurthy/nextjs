import {useEffect} from 'react'
import {useRouter} from 'next/router'


const Notfound =()=>{
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1)
            router.push("/")
        },3000)

    },[])

    return(<div>
        <h1>ooopssssss</h1>
    </div>)
}

export default Notfound