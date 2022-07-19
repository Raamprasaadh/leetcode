//july 19
// time took 15 mins
//leetcode problem to find the single number(number that appears only once) in a given array.
var singleNumber = function(nums) {
    nums.sort();
    for(var i=0;i<nums.length;i+=2){
        if(nums[i] !==nums[i+1]){
            return nums[i];
            break;
        }
        if(i === nums.length-1){
        return nums[i];
        }
    
        
    }
};

console.log(singleNumber([1,1,2,2,3,4,4]));