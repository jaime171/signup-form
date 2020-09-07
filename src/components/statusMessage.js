import React from 'react';

export const StatusMessage = ({ message = '', type }) => {
    return <div className={`statusMessage 
        ${message.length ? "active" : "d-none"}
        ${type === 'success' ? "" : "error"}
    `}>{message}</div>
}