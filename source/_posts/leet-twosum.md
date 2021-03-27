---
title: LeetCode | Two Sum
date: 2020-10-25 13:05:52
categories: 技术
tags: [Cpp,Leetcode]
---
想要刷下LeetCode，可是不知道自己有没有那个水平....
但是作为一个初一的信息学狗，不刷一下怎么可以呢....
<!-- more-->
我的代码十分简单，“暴力型”的：

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for(auto i=0;i<nums.size();i++)
        {
            for(auto j=0;j<nums.size();j++)
            {
                if((target-nums[i]==nums[j])&&i!=j)
                {
                    vector<int> a;
                    a.push_back(i);
                    a.push_back(j);
                    return a;
                }
            }
        }
        vector<int> emptyvector;
        return emptyvector;
    }
};
```

还编译错误了好几次！虽然对了，可是用时不大乐观：

![](https://s1.ax1x.com/2020/10/25/Bef98U.png)

我都不好意思晒出来……我太菜了……

不过我只有初一吗。加油！！！
