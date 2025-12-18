import { Helmet } from 'react-helmet-async';

const defaultTitle = "Anfisa Domashova | Frontend Software Engineer";
const defaultDescription = "Personal portfolio of a Frontend Developer, showcasing experience with React, Vite, Framer Motion, Tailwind CSS, and modern web technologies.";

const SEOHelmet = ({ 
    title, 
    description, 
    canonicalUrl = "https://anthitariel.github.io/react-portfolio-spa" 
}) => {
    
    // Fallback logic: use provided title/description, otherwise use the default values.
    const pageTitle = title ? `${title} | Anfisa Domashova` : defaultTitle;
    const pageDescription = description || defaultDescription;

    // Define the absolute image URL for social media previews
    const imageUrl = canonicalUrl.endsWith('/') 
        ? `${canonicalUrl}img/react-portfolio-spa.jpg`
        : `${canonicalUrl}/img/react-portfolio-spa.jpg`;

    return (
        <Helmet>
            {/* Primary SEO Tags (Title, Meta Description, Canonical Link) */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph (OG) for Social Media Sharing */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={imageUrl} />
            
            {/* Twitter Card Tag for Twitter previews */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    );
};

export default SEOHelmet;