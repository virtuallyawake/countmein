/* File: app/components/d3-lines/d3-lines-directive.js */

weApp.directive('weD3Lines', [function(){
  return{
    restrict: 'EA',
    scope: {
      options: '=',
      data: '='
    },
    link: function(scope, elem, attrs){

      /* Private variables */

      var margin = {
        top: 20,
        right:20,
        bottom:30,
        left:40
      };

      var width = scope.options.width - margin.left - margin.right;
      var height = scope.options.height - margin.top - margin.bottom;
      var svg = d3.select(elem[0])
                  .append("svg")
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.left + margin.right);
      var chart = svg.append('g')
                    .attr('transform',
                      "translate(" + margin.left + "," + margin.top + ")");
      var xScale = d3.scale.linear()
                    .range([0, width]);
      var yScale = d3.scale.linear()
                    .range([height, 0]);
      var xAxis, yAxis;
      var data = scope.data.data;
      var units = scope.data.units;
      var descriptionXAxis = scope.options.descriptionXAxis;
      var descriptionYAxis = scope.options.descriptionYAxis;
      var customColor = scope.options.customColor;

      /* Private functions */

      function drawChart()
      {
        /* Private variables */

        /* First, clear the field. */
        svg.selectAll('line').remove();
        svg.selectAll('path').remove();
        svg.selectAll('text').remove();

        /* Next, perform the calculations */
        yScale.domain([
          0,
          d3.max(data) * 1.02 /* Give it some margin */
        ]).nice();

        xScale.domain([
        0, units.length - 1
        ]).nice();

        yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient('left')
                  .ticks(10)
                  .innerTickSize(-width)
                  /*.outerTickSize(-width)*/
                  .tickPadding(10);

        xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient('bottom')
                  .ticks(units.length - 1)
                  /*.outerTickSize(-height)*/
                  .tickFormat(function(d){
                    return units[d];
                  });

        /* Then, draw the framework of the chart */
        chart.append('g')
            .attr('class', 'we-chart-axis we-bottom-text')
            .attr('transform', 'translate(0, ' + height + ')')
            .call(xAxis)
          .append('text')
            .attr('x', width)
            .attr('y', -6)
            .style('text-anchor', 'end')
            .text(descriptionXAxis);

        chart.append('g')
            .attr('class', 'we-chart-axis')
            .call(yAxis)
          .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71rem')
            .style('text-anchor', 'end')
            .text(descriptionYAxis);

        /* Finally, draw the data */
        for(var i = 0; i < data.length; i++)
        {
          if(i < data.length - 1){
            chart.append("line")
              .attr('x1', xScale(i))
              .attr('y1', yScale(data[i]))
              .attr('x2', xScale(i + 1))
              .attr('y2', yScale(data[i + 1]))
              .style('stroke', customColor);
          }

          chart.append('circle')
            .attr("cx", xScale(i))
            .attr("cy", yScale(data[i]))
            .attr("r", 3.5)
            .style("fill", "white")
            .style("stroke", customColor);
        }
      }

      /* Event handlers */

      if(scope.options.watch === true){
        scope.$watch('data.data', function(){
          drawChart();
        });
      }

      /* Initiation */

      drawChart();

    }
  };

}]);
