import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image }) {
  const siteName = "Life Care Dental Clinic";
  const defaultImage = "https://i.postimg.cc/K8ZBmckq/Whats-App-Image-2026-03-11-at-8-23-58-PM.jpg";
  const finalImage = image || defaultImage;
  
  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Social Media Tags (Makes WhatsApp sharing look premium) */}
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content="https://lifecaredental.online/" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />

      {/* JSON-LD Structured Data (Local Business Schema) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": siteName,
          "image": finalImage,
          "@id": "https://lifecaredental.online/",
          "url": "https://lifecaredental.online/",
          "telephone": "+91 88888 88888",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Life Care Dental Clinic",
            "addressLocality": "Your City",
            "addressRegion": "Your State",
            "postalCode": "123456",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 0,
            "longitude": 0
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "21:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/lifecaredental",
            "https://www.instagram.com/lifecaredental"
          ]
        })}
      </script>
    </Helmet>
  );
}