import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const[onlineStatus , setOnlineStatus] = useState(true);
    // check if it is online or not;
        useEffect(()=>{

            window.addEventListener("online" , () => {
                setOnlineStatus(true);
            })
            window.addEventListener("offline" , () => {
                setOnlineStatus(false);
            })

        },[])

    // return boolean
    return onlineStatus;
}

export default useOnlineStatus;