

var selfIntersectLines = [];

exports.findSelfIntersections = function(points, findAllLines) {
        var lineIntersect = require('line-intersect'),
            equalPoint = function(point1, point2) {
              return(point1[0] === point2[0] && point1[1] === point2[1]);
            },
            line1p1, line1p2, line2p1, line2p2, result, found = false;

        for(var i = 0; i < points.length; i++) {
            line1p1 = points[i];
            if((i+1) < points.length) {
              line1p2 = points[i+1];
            } else {
              line1p2 = points[0];
              if(equalPoint(line1p1, line1p2)) {
                continue;
              }
            }
            for(var j = i+1; j < points.length; j++) {
              line2p1 = points[j];
              if((j+1) < points.length) {
                line2p2 = points[j+1];
              } else {
                line2p2 = points[0];
                if(equalPoint(line2p1, line2p2)) {
                  continue;
                }
              }

              result = lineIntersect.checkIntersection(
                line1p1[0], line1p1[1], line1p2[0], line1p2[1],
                line2p1[0], line2p1[1], line2p2[0], line2p2[1]
              );

              if(result['type'] === 'intersecting') {
                if(equalPoint(line1p2, line2p1) && equalPoint(line1p2, [result.point.x, result.point.y]) || equalPoint(line1p1, line2p2)) {
                 continue;
                }
                selfIntersectLines.push([[line1p1, line1p2], [line2p1, line2p2]]);
                if(findAllLines !== true) {                  
		  return true;
                }
              }
            }
        }
        return found;
};

exports.getSelfIntersectLines = function() {
        return selfIntersectLines;
};
