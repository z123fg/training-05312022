import React from "react"
import { dispatch } from "../../../../counter-hooks-alex/src/components/redux/redux";

const Searchbox = () => {
    const keyword = useSeletor(state=>state.searchbox.keyword);
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        dispatch(updateKeyword(e.target.value));
    }

    const handleSubmit = () =>{
        
    }

    return (
        <>
        <input value={keyword} onChange={handleChange}/>
        <button onClick={handleSubmit}>submit</button>
        </>
    )
}

export default Searchbox;