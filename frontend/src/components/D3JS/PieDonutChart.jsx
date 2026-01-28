import { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieDonutChart = () => {
  const pieRef = useRef(null);
  const donutRef = useRef(null);

  useEffect(() => {
    const data = [
      { label: "Users", value: 30 },
      { label: "B", value: 70 }
    ];

    const width = 300;
    const height = 300;
    const margin = 30;
    const radius = Math.min(width, height) / 2 - margin;

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(d3.schemeCategory10);

    const pie = d3.pie().value(d => d.value);
    const arcs = pie(data);

    // ===== PIE =====
    const arcPie = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    const svgPie = d3.select(pieRef.current);
    svgPie.selectAll("*").remove();

    const gPie = svgPie
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    gPie.selectAll("path")
      .data(arcs)
      .join("path")
      .attr("d", arcPie)
      .attr("fill", d => color(d.data.label))
      .attr("stroke", "#fff")
      .style("stroke-width", "2px");

    gPie.selectAll("text")
      .data(arcs)
      .join("text")
      .text(d => d.data.label)
      .attr("transform", d => `translate(${arcPie.centroid(d)})`)
      .style("text-anchor", "middle")
      .style("font-size", "12px");

    // ===== DONUT =====
    const arcDonut = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius);

    const svgDonut = d3.select(donutRef.current);
    svgDonut.selectAll("*").remove();

    const gDonut = svgDonut
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    gDonut.selectAll("path")
      .data(arcs)
      .join("path")
      .attr("d", arcDonut)
      .attr("fill", d => color(d.data.label))
      .attr("stroke", "#fff")
      .style("stroke-width", "2px");

    gDonut.selectAll("text")
      .data(arcs)
      .join("text")
      .text(d => d.data.label)
      .attr("transform", d => `translate(${arcDonut.centroid(d)})`)
      .style("text-anchor", "middle")
      .style("font-size", "12px");

  }, []);

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <svg ref={pieRef}></svg>
      <svg ref={donutRef}></svg>
    </div>
  );
};

export default PieDonutChart;
