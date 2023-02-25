export default function (json_data) {
  var data = [["Industry", "Number of Analyzed Stock", "Average Rating"]];
  var subData = [];
  for (var i in json_data) {
    subData[0] = json_data[i]["_id"];
    subData[1] = json_data[i]["count"];
    subData[2] = json_data[i]["avgRating"];
    data.push(subData);
    subData = [];
  }

  return data;
}
