'use client'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

const Facebook = ()=>{
    const hanfleBtn = ()=>{
        router.push('/')
    }
    const router = useRouter()
    return (
        <div> 
            facebook page
            <div className='flex border-solid w-16  text-slate-500 '>
                <Button > question</Button>
                <button  className='bg-red-500' onClick={()=>hanfleBtn()} >back home </button>
            </div>
        </div>
    )
}

export default Facebook 
