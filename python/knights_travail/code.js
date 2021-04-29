/*Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 

Follow up: The overall run time complexity should be O(log (m+n)).
*/

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// find total length n+m
   //if n+m - odd 
    // median index = Math.floor((m+n)/2)
   //else
    // lowermedian = ((m+n)/2)-1 //not nessary
    // median = (m+n)/2

    //define new joined arr

    //i = 0 - index for nums1
    //j = 0 - index for nums2

    //[1,3] + [2]
    // i       j

    //compare elements
    //if el@ i < add nums1[i] to joined arr and i++
    //else nums2[j] to joined arr and j++
    //if length oj joined arr is == median or highmedian then we stop

    // if n+m odd return last element
    //else return last and pre-last sun / 2
    let arrTimer = 0;
 var findMedianSortedArrays = function(nums1, nums2) {

    const totalLength = nums1.length + nums2.length; //3

    let medianIndex = Math.floor(totalLength/2); //1
    if (totalLength === 0) return 0
    if (nums1.length === 0) {
        return oddVsEvenArrayHelper(nums2, totalLength, medianIndex)
    } else if (nums2.length === 0) {
        return oddVsEvenArrayHelper(nums1, totalLength, medianIndex)
    }

    const joinedArray = [];

    let i = 0;
    let j = 0;

    while (joinedArray.length < medianIndex + 1) {
        if (!nums2[j] || nums1[i] < nums2[j]) {
            joinedArray.push(nums1[i]);
            i++
        } else {
            joinedArray.push(nums2[j]);
            j++
        } 
    }

    return oddVsEvenArrayHelper(joinedArray, totalLength, medianIndex);
    
};

const oddVsEvenArrayHelper = (array, totalLength, medianIndex) => {
    if (totalLength % 2 === 0) {
                 return ( array[medianIndex-1]+array[medianIndex])/2;
            } else {
                 return array[medianIndex];
            }
}

//that's ok :) Was nice working with you!
console.time(arrTimer)
console.log(findMedianSortedArrays([2,4],[3]));//3
console.timeEnd(arrTimer)
console.time(arrTimer)
console.log(findMedianSortedArrays([1,3,5, 8], []));//4
console.timeEnd(arrTimer)
console.time(arrTimer)
console.log(findMedianSortedArrays([], []));//0
console.timeEnd(arrTimer)
console.time(arrTimer)
console.log(findMedianSortedArrays([1,3,5, 8], [4,6,7,])); //5
console.timeEnd(arrTimer)
console.time(arrTimer)
console.log(findMedianSortedArrays([1,3,5, 8], [4,6,7,9])) //5.5 
console.timeEnd(arrTimer)
console.time(arrTimer)
console.log(findMedianSortedArrays([], [1,3,5, 8]));//4
console.timeEnd(arrTimer)
console.time(arrTimer)
console.log(findMedianSortedArrays([1,3,5, 8, 10, 20, 23, 30, 50, 60, 60, 60, 60, 60 , 600, 601,602,603,604,605,606,607,608], [4,6,7,9, 11, 12, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]))
console.timeEnd(arrTimer)