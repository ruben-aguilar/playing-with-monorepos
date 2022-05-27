import * as React from 'react';

export const Name = () => {
    const [name, setName] = React.useState("");


    React.useEffect(() => {
        fetch("http://localhost:3001/name").then(data => data.json()).then(data => setName(data.name));
    }, []);


    if (!name) return null;
    return <h1>My name is {name} NOT UPDATED</h1>;
};
