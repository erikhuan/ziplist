/* Assignment E27 ziplist
* Attempts 1
* 19:39 */
/**
 * Created by huang on 2/6/2017.
 */

function zipList(list1, list2) {
  const zippedList = [];
  if (list1.length !== list2.length) {
    return 'Lists are not equal length!';
  }
  for (let i = 0; i < list1.length; i += 1) {
    zippedList.push(list1[i]);
    zippedList.push(list2[i]);
  }
  return zippedList;
}
console.log(zipList([1, 2, 3], ['a', 'b', 'c']));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
