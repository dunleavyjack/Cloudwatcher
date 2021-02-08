import React from 'react';
import { getUser } from '../utils/functions';


const Dashboard = () =>  {    
    return(
        <div>
            <p>Dashboard</p>
            <button onClick={() => getUser()}>Get User Info</button>
        </div>
    )
};

export default Dashboard;