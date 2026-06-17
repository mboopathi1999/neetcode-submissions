class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let l = 0
      let r = nums1.length - 1
      let len = nums1.length+nums2.length
      len = Math.floor(len / 2)
      if(nums1.length === 0) {
        if(nums2.length === 0) {
            return 0
        } else {
            if(nums2.length % 2 === 0) {
                return (nums2[len-1]+nums2[len]) / 2
            } else {
                return nums2[len]
            }
        }
      }
      if(nums2.length === 0) {
        if(nums1.length === 0) {
            return 0
        } else {
            if(nums1.length % 2 === 0) {
                return (nums1[len-1]+nums1[len]) / 2
            } else {
                return nums1[len]
            }
        }
      }
      let l1 = nums1[0]
      let l2 = nums2[0]
      let r1 = nums1[nums1.length-1]
      let r2 = nums2[nums2.length-1]
      while(l <= r && l >=0 && r <= nums1.length - 1) {
        const mid = Math.floor((l+r)/2)
        const rightArrPar = len - mid - 2
        l1 = nums1[mid] ?? Number.NEGATIVE_INFINITY
        l2 = nums2[rightArrPar] ?? Number.NEGATIVE_INFINITY
        r1 = nums1[mid+1] ?? Number.POSITIVE_INFINITY
        r2 = nums2[rightArrPar+1] ?? Number.POSITIVE_INFINITY
        
        if(l1<=r2 && l2 <= r1) {
            if((nums1.length+nums2.length)%2 === 0) {
                const res =  (Math.max(l1,l2) + Math.min(r1,r2)) / 2
                if([Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY].includes(res)) {
                    return 0
                }
                return res
            } else {
                const res = Math.min(r1,r2)
                if([Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY].includes(res)) {
                    return 0
                }
                return res
            }
        }
        if(l1 > r2) {
            r = mid -1
        }
        if(l2 > r1) {
            l = mid + 1
        }
      }
      if(r < 0) {
        l1 = Number.NEGATIVE_INFINITY   
        l2 = nums2[len - 1]
        r1 = nums1[0]
        r2 = nums2[len]
      }
      if(l>nums1.length-1) {
        l1 = nums1[nums1.length - 1]
        l2 = nums[len - nums1.length - 1]   
        r1 = Number.POSITIVE_INFINITY  
        r2 = nums2[len - nums1.length]
      }
      console.log({l,r,l1,l2,r1,r2})

      if(len%2 === 0) {
        return (Math.max(l1,l2) + Math.min(r1,r2)) / 2
        } else {
          return Math.min(r1,r2)
        }
    }
}
