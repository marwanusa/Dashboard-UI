/* eslint-disable prettier/prettier */
import { ResponsivePie } from '@nivo/pie';
import { useState } from 'react';
import './styles.css';
const WebsiteTrafficChart = () => {
  const data = [
    { id: "React", label: "React", value: 272, color: "hsl(107, 70%, 50%)" },
    { id: "stylus", label: "stylus", value: 543, color: "hsl(64, 70%, 50%)" },
    { id: "sass", label: "sass", value: 401, color: "hsl(41, 70%, 50%)" },
    { id: "haskell", label: "haskell", value: 434, color: "hsl(172, 70%, 50%)" },
    { id: "nue", label: "nue", value: 333, color: "hsl(219, 70%, 50%)" },
  ];
    const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <>
    <div className="card">
      <div className="card-header">
        <div className="date-picker-wrapper">
          <div className="date-picker">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M7 2v2H5a2 2 0 0 0-2 2v14a2..." />
            </svg>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <span className="date-separator">to</span>

          <div className="date-picker">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M7 2v2H5a2 2 0 0 0-2 2v14a2..." />
            </svg>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='card-body-1'>

    <div style={{ height: '600px', width: '70%' }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          { match: { id: 'ruby' }, id: 'dots' },
          { match: { id: 'c' }, id: 'dots' },
          { match: { id: 'go' }, id: 'dots' },
          { match: { id: 'python' }, id: 'dots' },
          { match: { id: 'scala' }, id: 'lines' },
          { match: { id: 'lisp' }, id: 'lines' },
          { match: { id: 'elixir' }, id: 'lines' },
          { match: { id: 'javascript' }, id: 'lines' }
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
        theme={{
          textColor: '#333',
          fontSize: 12,
          tooltip: {
            container: {
              background: '#ffffff',
              color: '#333',
              fontSize: 12,
            },
          },
        }}
      />
    </div>
            <div className="filter-container">
      <div className="filter-row">
        <label htmlFor="selled">Number Of Selled</label>
        <input
          type="number"
          name="selled"
          id="selled"

          placeholder="Enter number"
        />
      </div>
      <div className="filter-row">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Enter price"
        />
      </div>
    </div>
      </div>

    </div>
    </>
  );
};

export default WebsiteTrafficChart;
