import React from "react";


const testimonialCard = ({customerName, reviewText}) => {

    return(
        <>
        <div className="max-w-xs border rounded-1g shadow-1g p-4 bg-blue-200">
            <h2 className="text-1g font-bold mt-3">{customerName}</h2>
            <p className="text-gray-700">{reviewText}</p>
        </div>
        </>
    )

}

export default testimonialCard