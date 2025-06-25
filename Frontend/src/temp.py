# n = 37
# i = 2

# prime = True
# while i*i <= n:
#     if n % i == 0:
#         prime = False
#         print( "Not a prime ")
#         break
#     i += 1
# if prime:
#     print ("It is a prime number ")


# nums = list(map(int, input().split()))
# # print(sum(nums))

# n = 0
# largest = nums[0]
# secondLargest = -999

# for i in nums:
#     if i > largest:
#         secondLargest = largest
#         largest = i
#     elif i > secondLargest:
#         secondLargest = i

# print(secondLargest)


# nums = list(map(int, input().split()))
# n = int(input())
# print( nums[n:] + nums[:n]  )


# n = int(input())

# for i in range(n):
#     for j in range(n-i):
#         print(' ', end='')
#     for j in range(i*2 + 1):
#         print("*", end = '')
#     print()

# for i in range(n-1):
#     for j in range(i+2):
#         print(' ', end='')
#     for j in range((n-2-i) * 2 + 1):
#         print("*", end='')
#     print()



nums = []
n = int(input())

for i in range(n):
    temp = list(map(int, input().split()));
    nums.append(temp)

print(nums)