
print("Enter first number")
n1 = int(input())
print("Enter Second number")
n2 = int(input())
print("Enter Third number")
n3 = int(input())
print("Enter Forth number")
n4 = int(input())

if n1>n2 and n1>n3 and n1>n4:
    print("n1 is greatest")
elif n2>n3 and n2>n4:
    print("n2 is greatest")

else:
    print("n3 is greatest")