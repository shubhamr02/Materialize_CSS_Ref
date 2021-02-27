openCloseData = [
            {
                "date": "1-May-16",
                "close": 558.13
            },
            {
                "date": "30-Apr-16",
                "close": 553.98
            },
            {
                "date": "27-Apr-16",
                "close": 567
            },
            {
                "date": "26-Apr-16",
                "close": 589.7
            },
            {
                "date": "25-Apr-16",
                "close": 599
            },
            {
                "date": "24-Apr-16",
                "close": 630.28
            },
            {
                "date": "23-Apr-16",
                "close": 666.7
            },
            {
                "date": "20-Apr-16",
                "close": 634.98
            },
            {
                "date": "19-Apr-16",
                "close": 645.44
            },
            {
                "date": "18-Apr-16",
                "close": 643.34
            },
            {
                "date": "17-Apr-16",
                "close": 543.7
            },
            {
                "date": "16-Apr-16",
                "close": 580.13
            },
            {
                "date": "13-Apr-16",
                "close": 605.23
            },
            {
                "date": "12-Apr-16",
                "close": 622.77
            },
            {
                "date": "11-Apr-16",
                "close": 626.2
            },
            {
                "date": "10-Apr-16",
                "close": 628.44
            },
            {
                "date": "9-Apr-16",
                "close": 636.23
            },
            {
                "date": "5-Apr-16",
                "close": 633.68
            },
            {
                "date": "4-Apr-16",
                "close": 624.31
            },
            {
                "date": "3-Apr-16",
                "close": 629.32
            },
            {
                "date": "2-Apr-16",
                "close": 618.63
            },
            {
                "date": "30-Mar-16",
                "close": 599.55
            },
            {
                "date": "29-Mar-16",
                "close": 609.86
            },
            {
                "date": "28-Mar-16",
                "close": 617.62
            },
            {
                "date": "27-Mar-16",
                "close": 614.48
            },
            {
                "date": "26-Mar-16",
                "close": 606.98
            }
        ];

        // set the dimensions and margins of the graph
        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 420 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        // parse the date / time
        var parseTime = d3.timeParse("%d-%b-%y");

        // set the ranges
        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]); https://srv.buysellads.com/ads/click/x/GTND42JJC6BIE27NCW7LYKQNC6YI453JCABDTZ3JCYYI4KQWC67DV2JKC67DV237F67DTK3MCWSDK2JMCWADTZ3JCYYI42QNFTADTK3K2JWNABY

        // define the line
        var valueline = d3.line()
            .curve(d3.curveCatmullRomOpen)
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.close); });

        // append the svg obgect to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("#chartArea").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const drawGraph = (data) => {

            // format the data
            data.forEach(function (d) {
                d.date = parseTime(d.date);
                d.close = +d.close;
            });

            // Scale the range of the data
            x.domain(d3.extent(data, function (d) { return d.date; }));

            y.domain([d3.min(data, function (d) { return d.close - margin.top; }),
            d3.max(data, function (d) { return d.close + margin.top })]);

            // Add the valueline path.
            svg.append("path")
                .data([data])
                .attr("class", "line")
                .attr("d", valueline);

        }

        //drawGraph
        drawGraph(openCloseData);