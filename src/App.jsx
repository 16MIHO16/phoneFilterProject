import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Phones from "./phones";
import "./reset.css";

function App() {
  const [storage, setStorage] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.vendoo.ge/api/beta/catalog?url=technics%2Ftelefonebi%2Fmobiluri-telefonebi&sort=popular&sortDir=desc&page=1&limit=20&fbclid=IwAR1yUeRhfGiSORT7N00qG7LVBQ56fvNpqJA2c7kkktyYwRRVyNaBu1OUJCg"
      )
      .then((response) => {
        setStorage(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleFilter = () => {
    const filteredProducts = storage.filter((parameter) =>
      parameter.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredProducts;
  };

  return (
    <div className="webSite">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setStorage(handleFilter)}>Search</button>

      <div className="phonesContainer">
        {storage.map((parameter, i) => {
          if (parameter.original_price > parameter.final_price) {
            return (
              <Phones
                key={i}
                photo={parameter.thumb_img.files.file}
                name={parameter.name}
                original_price={parameter.original_price}
                final_price={parameter.final_price}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
export default App;
