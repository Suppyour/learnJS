import react, {isValidElement, useState} from 'react';

function Value() {
    const [znachenie, setZnachenie] = useState('');
    return (
        <div className="App">
            <h1>{znachenie}</h1>
            <input
                type="text"
                value={znachenie}
                onChange={e => setZnachenie(e.target.value)}
            />
        </div>
    );
}

export default Value;