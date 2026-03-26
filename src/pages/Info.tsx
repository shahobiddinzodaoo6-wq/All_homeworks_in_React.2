import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { apiImage,infoData } from "../api/todoApi"

const Info = () => {
  const {infoUser} = useSelector((state: any) => state.counter)
  console.log(infoUser);
  
  return (
    <div>
        {
          infoUser?.images.map((img: any) =>
            {
              return <div>
                <img src={`${apiImage}/${img.imageName}`} alt="" />
              </div>
            })
        }
        <h2>{infoUser?.name}</h2>
        <p>{infoUser?.description}</p>
    </div>
  )
}

export default Info