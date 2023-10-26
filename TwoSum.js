function TwoSum(nums, target){
    for(i = 0 ; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[j] == target - nums[i]){
                return[i, j];
            }
        }
    }
    return "There is no one sum";
}
answ = TwoSum([0, 2, 3, 4, 5, 6 , 7 ,8 ,9 ,1], 9)
console.log(answ)