import { useState } from 'react';

function Counter({ firstName = 'Rasim', lastName = 'Mehtijev', age = 34, children }) {
    const [newAge, setNewAge] = useState(age);

    const title = 'Counter Component';
    
    const ButtonAdd = () => <button onClick={() => setNewAge(newAge + 1)}>+</button>;
    const ButtonMinus = () => <button onClick={() => setNewAge(newAge - 1)}>-</button>;
    
    return (
        <div>
            <div>{title}</div>
            <div>First name: {firstName}</div>
            <div>Last name: {lastName}</div>
            <div>Age: {age}</div>
            <div>New age:
                <ButtonMinus />
                    {newAge}
                <ButtonAdd />
            </div>
            {children}
        </div>
    );
};

// Counter.defaultProps = {
//     firstName: 'Rasim',
//     lastName: 'Mehtijev',
//     age: 34,
// };

export default Counter;
