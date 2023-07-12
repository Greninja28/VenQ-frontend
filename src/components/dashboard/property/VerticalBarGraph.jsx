import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip } from 'chart.js';
import { Box, Typography, styled } from '@mui/material';

const Label = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`
const LabelName = styled(Typography)`
  font-family: 'Inter';
  font-size: 18px;
  color: grey;
`
const LabelAmount = styled(Typography)`
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 600;
`
const LabelSlider = styled('input')`
  width: 100%;
  cursor: pointer;
  background-color: #0170dc;
  border-radius: 10px;
  height: 10px;
`


const VerticalBarGraph = ({ investment, propertyValueGrowth, rentalYield, handleInvestmentChange, handlePropertyValueGrowthChange, handleRentalYieldChange }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.8)');
    gradient.addColorStop(0.5, 'rgba(54, 162, 235, 0.5)');
    gradient.addColorStop(1, 'rgba(54, 162, 235, 0.2)');

    const data = {
      labels: ['2024', '2025', '2026', '2027', '2028'],
      datasets: [
        {
          label: 'Investment',
          data: [investment, investment, investment, investment, investment],
          backgroundColor: 'rgb(18, 28, 48)',
        },
        {
          label: 'Total Rental Income',
          data: [
            rentalYield,
            rentalYield,
            rentalYield,
            rentalYield,
            rentalYield,
          ],
          backgroundColor: 'rgb(255, 209, 71)',
        },
        {
          label: 'Value Appreciation',
          data: [
            propertyValueGrowth,
            propertyValueGrowth,
            propertyValueGrowth,
            propertyValueGrowth,
            propertyValueGrowth,
          ],
          backgroundColor: 'rgb(65, 206, 142)',
        },
      ],
    };

    const options = {
      scales: {
        x: {
          type: 'category',
          beginAtZero: false,
          labels: ['2024', '2025', '2026', '2027', '2028'],
        },
        y: {
          type: 'linear',
          beginAtZero: false,
          ticks: {
            stepSize: 30000,
            suggestedMin: 500,
            suggestedMax: 300000,
          },
        },
      },
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip);

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, [investment, propertyValueGrowth, rentalYield]);

  return (
    <div>
      <canvas ref={chartRef} style={{ padding: '30px 30px 0px 30px' }} />

      <Box style={{ padding: '30px 30px 20px 30px' }}>

        <Box>
          <Label>
            <LabelName>Investment:</LabelName>
            <LabelAmount>RUP {investment}</LabelAmount>
          </Label>

          <LabelSlider
            type="range"
            min="500"
            max="300000"
            step="500"
            value={investment}
            onChange={handleInvestmentChange}
          />
        </Box>

        <Box>
          <Label>
            <LabelName>Property Value Growth (5 years):</LabelName>
            <LabelAmount>RUP {propertyValueGrowth}</LabelAmount>
          </Label>

          <LabelSlider
            type="range"
            min="5000"
            max="50000"
            step="500"
            value={propertyValueGrowth}
            onChange={handlePropertyValueGrowthChange}
          />
        </Box>

        <Box>
          <Label>
            <LabelName>Expected Annual Rental Yield:</LabelName>
            <LabelAmount>RUP {rentalYield}</LabelAmount>
          </Label>

          <LabelSlider
            type="range"
            min="5000"
            max="50000"
            step="500"
            value={rentalYield}
            onChange={handleRentalYieldChange}
          />
        </Box>

      </Box>

    </div>
  );
};

export default VerticalBarGraph;
