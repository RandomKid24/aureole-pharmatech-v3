import React from 'react';
import { Navigate } from 'react-router-dom';

const Contact: React.FC = () => {
    // Redirect to home page with contact hash
    return <Navigate to="/#contact" replace />;
};

export default Contact;
