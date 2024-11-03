import React from 'react';

const WeatherDisplay = ({ data }) => {
   return (
      <div style={{ marginTop: '20px' }}>
         <h2>City: {data.name}</h2>
         {data.weather.map((condition)=>(
            <div>
                <p>{condition.main}</p>
                <p>{condition.description}</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <p><strong>Icon:</strong> <img style={{width:"20px",border:"1px solid white"}} src={`http://openweathermap.org/img/wn/${condition.icon}.png`} alt={condition.description} /></p>
                </div>
               
            </div>
         ))}
         {/* <pre>{JSON.stringify(data, null, 2)}</pre> Pretty print JSON */}
      </div>
   );
};

export default WeatherDisplay;
