import { useEffect, useState } from "react"
import firebase from "../firebase"

function GetData() {

    const [getList, setGetList] = useState();

    useEffect(() => {
        const getDataRef = firebase.database().ref('output');
        getDataRef.on('value', (snapshot) => {
            console.log(snapshot.val())
            const getData = snapshot.val();
            const getList = []

            for (let id in getData) {
                getList.push(getData[id])
            }

            // getList.push(getData);
            setGetList(getList);
        })
    }, [])

    return (
        <div className="result">
            <h2>GETTING FAULT TYPE</h2>
            {getList != null ? (
                <>
                    {getList.map((data, index) => (
                        <>
                            {getList.length > 0 && (
                                <div>
                                    <h3>The fault type is <div className="res-data">{getList[0]}</div> </h3>
                                </div>
                            )}
                        </>
                    ))}
                </>) : (<div>Please Enter Data Above</div>)}
        </div>
    )
}

export default GetData