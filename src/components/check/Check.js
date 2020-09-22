import React, { useState, useEffect } from 'react'
import CheckService from '../../services/CheckService';

export default function Check(props) {
    const [ currentCheck, setCurrentCheck ] = useState([])

    const getCheck = (id) => {
        CheckService.show(id)
        .then(async respone => {
            console.log(respone.data);
            await setCurrentCheck(respone.data);
        })
    }

    useEffect(() => {
        console.log('checkId', props.match.params.checkId)
        getCheck(parseInt(props.match.params.checkId));
    }, [])
    return (
        <div>
            {(currentCheck.length)

            ? (<div>{currentCheck.map((c, index) => (
                <div key={index}>
                    {(c.categoryCheck.length) 
                       ? (<div>
                            <h5>Sum by categories:</h5>
                            {c.categoryCheck.map((catCheck, index) => (
                                <div key={index}>{catCheck.categoryName} - {catCheck.sum} UAH</div>
                            ))}
                        </div>)
                       : <p></p>
                    }
                    {(c.checkMaterial.length)
                      ? (<div> 
                            <h5>Used materials:</h5>
                            {c.checkMaterial.map((checkMat, index) => (
                                <div key={index}>{checkMat.name} - {checkMat.price} UAH</div>
                            ))}
                        </div>)
                      : <p></p>}
                    {(c.checkService.length)
                      ? (<div> 
                            <h5>Conducted works:</h5>
                            {c.checkService.map((checkSer, index) => (
                                <div key={index}>{checkSer.name} - {checkSer.price} UAH</div>
                            ))}
                        </div>)
                      : <p></p>
                    }
                    <h5>Total:</h5>
                    <div key={c.checkId}>
                        {c.sum} UAH
                    </div>
                </div>
               )
            )}
            </div>)
            : <h1>Nothing in check</h1>}
        </div>
    )
}
