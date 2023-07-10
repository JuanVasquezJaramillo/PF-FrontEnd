import { getAllClases } from "../global/clasesSlice/clasesSlice"; 
import Cards from "../components/Cards";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
export default function HomePage() {

  const clases = useSelector((state) => state.clases.list)


const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllClases())
  }, [])

  return (
    <>
      <h1>HomePage</h1>
      
      <Cards  clases = {clases}/>
    </>
  );
}