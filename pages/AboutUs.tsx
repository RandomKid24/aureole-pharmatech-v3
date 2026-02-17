import React from 'react';
import { Navigate } from 'react-router-dom';

const AboutUs: React.FC = () => {
    // Redirect to modern /about page
    return <Navigate to="/about" replace />;
};

export default AboutUs;
