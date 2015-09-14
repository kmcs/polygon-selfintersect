var assert = require('assert');
var polygonSelfIntersect = require('../');

describe('.findSelfIntersections', function() {
  it('should find self-intersections on self-intersecting polygons', function() {
    var myPolygon = [[1, 1], [1, 3], [3, 3], [3, 1], [0, 4], [1, 1]]; 
    assert.equal(polygonSelfIntersect.findSelfIntersections(myPolygon), true, 'Self-intersections with line x,x not found!');
  });

  it('should find no self-intersections on not self-intersecting polygons', function() {
    var myPolygon = [[1, 1], [1, 3], [3, 3], [3, 1], [1, 1]];
    assert.equal(polygonSelfIntersect.findSelfIntersections(myPolygon), false, 'Self-intersections found, but not in the polygon exists!');
  });
});
