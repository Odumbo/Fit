import { useEffect, useState } from "react";

    const Activities = () => {
    const [activities, setActivities] = useState ([])

    useEffect(() => {
    async function getActivities (){
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities')
           const activities = await response.json();
                   console.log(activities);
                   setActivities(activities.data.activities);
               }
               getActivities();
    },[])
    return (
    <main>
    <h2>Activities</h2>
    <table>
    <tr>
    <th>Name</th> 
    <th>Description</th>   
     </tr> 
     <td>Hey</td>
     <td>Hi</td>
     {activities.map(({id,  name,  description, })=>(
         <Activities key={id} id={id} name={name}  description={description}  />
     ))}
     </table>
    </main>
    )
}

export default Activities;

