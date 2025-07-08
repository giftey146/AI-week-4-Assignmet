def sort_dict_list_manual(dict_list, key):
    """
    Manually implemented function to sort list of dictionaries by key
    """
    return sorted(dict_list, key=lambda x: x[key])

# Test data
students = [
    {"name": "Alice", "grade": 85, "age": 20},
    {"name": "Bob", "grade": 92, "age": 19},
    {"name": "Charlie", "grade": 78, "age": 21}
]

# Sort by grade
sorted_students = sort_dict_list_manual(students, "grade")
print(sorted_students)