def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dict = {}
        for num in nums:
            if num in dict:
                dict[num] += 1
            else:
                dict[num] = 1
        sorted_dict = sorted(dict.items(), key=lambda x: x[1], reverse=True)
        result = []
        for(i, j) in sorted_dict:
            result.append(i)
        return result[:k]