import { FC } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    id: number
}


const ReadMoreBtn:FC<Props> = ({id}) => {
    const navigate = useNavigate()

    const handleClick = (id:number) => {
        navigate(`/blog/posts/${id}`)
    }

    return (
        <button onClick={() => handleClick(id)} className='blog-post-button'>Читать далее</button>
    )
}

export default ReadMoreBtn;