let apis = {
  bounding: {
    api:'https://api.openhistoricalmap.org/map?bbox=',
    url: (left, bottom, right, top) => {
      return apis.bounding.api + left + ',' + bottom + ',' + right + ',' + top;
    },
  },
  getRelation: {
    api:'https://api.openhistoricalmap.org/relation/',
    parameters:'/full',
    url: (relationId) => {
      return apis.getRelation.api + relationId + apis.getRelation.parameters;
    },
  },
  getWay: {
    api:'https://api.openhistoricalmap.org/way/',
    parameters:'/full',
    url: (wayId) => {
      return apis.getWay.api + wayId + apis.getWay.parameters;
    },
  },
};
