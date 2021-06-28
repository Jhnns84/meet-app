import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const EventGenre = ({ events }) => {
  const [ data, setData ] = useState([]);

  useEffect(() => {

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const getData = () => {
      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
        return { name: genre, value };
      });
      return data.filter(data => data.value > 0);
    };
    setData(() => getData());
  }, [events]);

  const COLORS = ['#1A281F', '#635255', '#CE7B91', '#C0E8F9', '#B8D3D1'];

  return (
    <ResponsiveContainer height={400} >
      {/* <h4>Types of Events</h4> */}
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;