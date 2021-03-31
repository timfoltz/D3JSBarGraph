let vertBars = d3.select("div",{class:"horizBars"})
.selectAll("div",{class:"horizBars"})
.data([15,32,10,8,60,24]);
let color = function(d){return d}

vertBars.enter().append("div")
.style("background-color",`rgb(0, function(d){return d}, 0)`)
        // .style("height","10px")
        .style("width", function(d){return d+"%"})

        .text(function(d){return d})
    vertBars.exit().remove();