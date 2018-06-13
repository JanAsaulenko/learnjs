import React from 'react'
import Exemplar from './exemplar'
function PersList({persons}) {
const jsx = [];
for(let i=0;i<persons.length;i++){
        jsx.push(<Exemplar key="Math.random().i" info ={persons[i]}/>)
    }
return(
    <div className="PersList">
    {jsx}
    <Exemplar info={persons[0]}/>
    </div>
)

}

export default PersList