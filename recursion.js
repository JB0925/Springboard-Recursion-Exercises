/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1) return nums[0];
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, size = 0) {
  if (words.length === 1) return words[0].length > size ? words[0].length : size;
  if (words[0].length > size) size = words[0].length;
  return longest(words.slice(1), size);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, count = 0, newStr = "") {
  if (count === str.length - 1) {
    if (count % 2 === 0) {
      return newStr + str.slice(-1)[0];
    }
    return newStr;
  };
  if (count % 2 === 0) {
    newStr += str[count]
  };
  count++
  return everyOther(str, count, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) return true;
  if (str[start] === str[end]) return isPalindrome(str, start + 1, end - 1);
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, count = 0) {
  if (count === arr.length) return -1;
  if (arr[count] === val) return count;
  return findIndex(arr, val, count + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, count = str.length - 1, newStr = "") {
  if (count === 0) return newStr + str[count];
  newStr += str[count];
  return revString(str, count - 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strArray = []) {
  for (let item in obj) {
    if (obj[item] instanceof Object) {
      gatherStrings(obj[item], strArray);
    } else {
      if (typeof obj[item] === "string") {
        strArray.push(obj[item])
      }
    }
  }
  return strArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === val) return mid;
  if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, high);
  };
  return binarySearch(arr, val, low, mid - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
