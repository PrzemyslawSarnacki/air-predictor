import React from 'react';
import { useD3 } from './hooks/useD3';
import * as d3 from 'd3';

interface IBarChartProps {
    data: d3.DSVParsedArray<any>;
  }

const LineChart = ({data} : IBarChartProps) => {
    const ref = useD3(
        (svg : any) => {
          const height = 500;
          const width = 500;
          const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    
          const x = d3
            .scaleBand()
            .domain(data.map((d: any) => d.year))
            .rangeRound([margin.left, width - margin.right])
            .padding(0.1);
    
          const y1 = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d: any) => d.y_pred)])
            .rangeRound([height - margin.bottom, margin.top]);
    
          const xAxis = (g: any) =>
            g.attr("transform", `translate(0,${height - margin.bottom})`).call(
              d3
                .axisBottom(x)
                .tickSizeOuter(0)
            );
    
          const y1Axis = (g: any) =>
            g
              .attr("transform", `translate(${margin.left},0)`)
              .style("color", "steelblue")
              .call(d3.axisLeft(y1).ticks(null, "s"))
              .call((g: any) => g.select(".domain").remove())
              .call((g: any) =>
                g
                  .append("text")
                  .attr("x", -margin.left)
                  .attr("y", 10)
                  .attr("fill", "currentColor")
                  .attr("text-anchor", "start")
                  .text(data)
              );
    
          svg.select(".x-axis").call(xAxis);
          svg.select(".y-axis").call(y1Axis);
    
          svg
            .select(".plot-area")
            .attr("fill", "steelblue")
            .selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("x", (d: any) => x(d[""]))
            .attr("width", x.bandwidth())
            .attr("y", (d: any) => y1(d.y_pred))
            .attr("height", (d: any) => y1(0) - y1(d.y_pred));
        },
      );
    
      return (
        <svg
          ref={ref}
          style={{
            height: 500,
            width: "100%",
            marginRight: "0px",
            marginLeft: "0px",
          }}
        >
          <g className="plot-area" />
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      );
    
}

export default LineChart;
