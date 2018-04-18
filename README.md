# polygon-selfintersect

This script find all the self-intersections in a polygon.

## Install

```bash
npm install polygon-selfintersect
```


## Usage

```js
var polygonSelfIntersect = require('polygon-selfintersect');
var myPolygon = [[1, 1], [1, 3], [3, 3], [3, 1], [0, 4], [1, 1]];

if (polygonSelfIntersect.findSelfIntersections(myPolygon)) {
  console.log("Found the following self intersection lines:");
  console.log(polygonSelfIntersect.getSelfIntersectLines());
} else {
  console.log("No self intersection found.");
}
```

## Licence

MIT
