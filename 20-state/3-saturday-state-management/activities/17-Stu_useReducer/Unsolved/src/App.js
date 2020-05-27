import React from 'react';

function Count() {
    const dogs = [
        {
            name: `Harry`,
            image: `https://i.dlpng.com/static/png/6562439_preview.png`
        },
        {
            name: `Hermione`,
            image: `https://cdn131.picsart.com/311101774000211.png?type=webp&to=min&r=640`
        }
    ];

    return (
        <div className="App">
            <div className="row mt-5">
                {dogs.map(item =>
                    <div key={item.name} className="card mx-auto col-4">
                        <img className="card-img-top" src={item.image} alt={item.name} />
                        <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">
                                {item.name} has been praised __ times!
                            </p>
                            <button className="btn btn-primary">Praise</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Count;
