numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_sum = sum(num for num in numbers if num % 2 == 0)
odd_sum = sum(num for num in numbers if num % 2 != 0)

result = even_sum - odd_sum
print(result)