export default function TableOne({ data }) {
    const salesTotals = data.reduce((prev, curr) => {
        if (curr.region in prev) {
            prev[curr.region] += curr.sales;
        } else {
            prev[curr.region] = curr.sales;
        }
        return prev;
    }, {});

    return (
        <div className='table__container'>
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key, i) => (
                            <th key={i}>{key}</th>
                        ))}
                    </tr>
                </thead>

                {Object.keys(salesTotals).map((region, i) => {
                    return (
                        <tbody key={i}>
                            <tr >
                                <td>{region}</td>
                                <td>sum</td>
                                <td>{salesTotals[region]}</td>
                            </tr>
                            {data
                                .filter((el) => el.region === region)
                                .map((el, i) => {
                                    return (
                                        <tr key={i}>
                                            {Object.values(el).map((value, i) => (
                                                <td key={i}>{value}</td>
                                            ))}
                                        </tr>
                                    );
                                })}
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};




