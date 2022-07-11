import React, {useState} from "react"

const DisplayData2 = ({data}) => {
    const [dataFilter, setDataFilter] = useState({
        region: "all",
        model: "all"
    });

    const handleDataFilter = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        setDataFilter({...dataFilter, [id]: value});
    }

    const dFilter  = (targetData) => {
        for (const [key, value] of Object.entries(dataFilter)) {
            if (value === "all"){
                continue;
            }
            else if (targetData[key] !== value) {
                return false;
            }
        }
        return true;
    }

    const dataRegions = Array.from(new Set(data.map((value) => value.region)));
    const dataModels = Array.from(new Set(data.map((value) => value.model)));


    return(
    <>
        <label>
          Region Filter
          <select id="region" onChange={handleDataFilter} value={dataFilter.region}>
            <option>all</option>
            {dataRegions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label>
          Model Filter
          <select id="model" onChange={handleDataFilter} value={dataFilter.model}>
            <option>all</option>
            {dataModels.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>

        <table>
            <td>region</td>
            <td>model</td>
            <td>sales</td>
            <tbody>
                {data
                .filter((d) => dFilter(d))
                .map((d, index) => (
                    <tr key={index}>
                        {Object.keys(d).map((record, index) =>{
                            return <td key={index}>{d[record]}</td>;
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );

}

export default DisplayData2;