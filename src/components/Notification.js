import React from 'react';

export const Notification = ({ text }) => {
    return (
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    )
}