export default function (json_data) {
  //var data = [];
  var data = [["Industry", "Average Rating"]];
  var subData = [];
  for (var i in json_data) {
    subData[0] = json_data[i]["_id"];
    subData[1] = json_data[i]["avgRating"];
    data.push(subData);
    subData = [];
  }

  return data;
}
