
import { useParams } from "react-router-dom";

const { useEffect, useState } = require("react");

function Detail(){
  const params = useParams()
  const [mascota, setMascota] = useState([]);

  useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
      for (const m of data){
        if (m.id === parseInt(params.mascotaId)) {
          setMascota(m);
          break;
      }
    }
  });
 }, [params.mascotaId]);

 return(
  <div>
    <h1>{mascota.nombre}</h1>
    <img src={mascota.foto} alt={mascota.descripcion} style={{ height: "14rem" }}></img>
    <h3>{mascota.raza}</h3>

  </div>
 )

}

export default Detail;