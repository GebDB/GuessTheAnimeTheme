import React, { useState } from 'react';

const FilterMenu = () => {
    const [isOpenings, setOpenings] = useState(true);

    const toggleOpenings = () => {
        setOpenings(!isOpenings);
    };

    const [isEndings, setEndings] = useState(true);

    const toggleEndings = () => {
        setEndings(!isEndings);
    };


    return (
        <div className="flex flex-col">
            <h1 className="inline-block px-1 bg-black text-center text-white text-2xl font-extrabold font-mono">
                Filters
            </h1>
            <div onClick={toggleOpenings} style={{ cursor: 'pointer' }} className="inline-block px-1 bg-black bg-opacity-60 text-white text-lg font-extrabold font-mono">
                Openings
                {isOpenings && (
                    <img className="inline-block rounded-md px-1"
                    src={`${process.env.PUBLIC_URL}/Assets/checkmark1.png`}
                    alt="Checkmark"
                    width="25"
                    height="25"
                />
                )}
            </div>

            <div onClick={toggleEndings} style={{ cursor: 'pointer' }} className="inline-block px-1 bg-black bg-opacity-60 text-white text-lg font-extrabold font-mono">
                Endings
                {isEndings && (
                <img className="inline-block rounded-md px-1"
                    src={`${process.env.PUBLIC_URL}/Assets/checkmark1.png`}
                    alt="Checkmark"
                    width="25"
                    height="25"
                />
            )}
            </div>
        </div>
    );
};

export default FilterMenu;
