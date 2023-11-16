import React, { useState } from 'react';
import '../Styles/Content.css';

const Content = () => {
  const initialContent = "Dunadpay is an online payment processing platform that offers a range of secure and reliable payment solutions for individuals and businesses. With Dunadpay, users can easily send and receive payments globally in multiple currencies, making it an ideal solution for e-commerce businesses and international transactions. Dunadpay offers a range of payment options, including credit and debit card payments, bank transfers, and e-wallet payments. The platform also supports recurring payments, making it easy for businesses to set up subscription services. One of the key benefits of Dunadpay is its robust security features, including 3D Secure authentication and SSL encryption. This ensures that all transactions are secure and protected from fraudulent activity. In addition to its payment processing solutions, Dunadpay also offers a range of other services, including currency conversion, payment gateway integration, and custom payment solutions tailored to the unique needs of each business.";
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="Content">
      <div className='content-wrapper'>
        <h1>One-Stop Shop for all Payment Services.</h1>
        <p>
          {showMore ? initialContent : initialContent.slice(0, 450)} 
          {initialContent.length > 450 && (
            <span>
              {showMore ? (
                <span>
                  {initialContent.slice(450)}{/* Display the remaining text */}
                  <button className="More" onClick={toggleContent}>
                    Read Less
                  </button>
                </span>
              ) : (
                <span>
                  <button className="More" onClick={toggleContent}>
                    Read More
                  </button>
                </span>
              )}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default Content;
