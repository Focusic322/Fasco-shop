import React, { useState } from 'react';
import { IoStar } from "react-icons/io5";

export default function Stars() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className='flex'>
            {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            style={{ display: "none" }}
                            onClick={() => setRating(currentRating)}
                        />
                        <IoStar
                            className="star"
                            size={20}
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}
