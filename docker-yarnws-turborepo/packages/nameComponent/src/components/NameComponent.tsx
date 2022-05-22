import * as React from 'react';

export const Name = () => {
    const [name, setName] = React.useState("");


    React.useEffect(() => {
        fetch("http://localhost:3000/name").then(data => data.json()).then(name => { console.log(name); setName(name) });
    }, []);


    if (!name) return null;
    return <h1>My name is not Ruben</h1>;
};
