import React from 'react';

const Weather = props => (
    <div>
        {/* ako lijevo od && znaka vraca true, onda se desno izvrsava */}
        { props.city && <h3>City: {props.city}</h3> }
        { props.country && <h3>Country: {props.country}</h3> }
        { props.temperature && <h3>Temp:    {props.temperature}</h3> }
        { props.humidity && <h3>Humidity:    {props.humidity}</h3> }
        { props.description && <h3>Description: {props.description}</h3> }
        { props.error && <h3 className="text-danger">{props.error}</h3> }
    </div>
)

export default Weather;