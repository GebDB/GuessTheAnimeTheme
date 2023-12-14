import React from "react";
import MainContent from "../Components/MainContent";

const Home = () => {
    return (
          <div className="flex-1 justify-center items-center h-screen">
            <div
              className="bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/home_background.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                width: '100%',
                height: '100%',
              }}
            >
              <div className="flex items-center justify-center relative top-12">
                <MainContent/>
              </div>
            </div>
          </div>
      );
    }
    
export default Home;
