/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    let array = []
    let table = {}
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in table){
            array = [table[nums[i]], i]
        } else {
            table[target - nums[i]] = i;
        }
    }
    
    return array;
}