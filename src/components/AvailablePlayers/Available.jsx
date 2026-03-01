import React, { use } from 'react';

const Available = ({playerPromise}) => {
    const players =use(playerPromise)
    console.log(players);
    return (
        <div>
            
        </div>
    );
};

export default Available;