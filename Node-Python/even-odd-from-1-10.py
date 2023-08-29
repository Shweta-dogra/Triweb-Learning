print("Enter any number")
endNum = int(input())


for i in range(endNum):
    num = i+1
    if num%2==0:
        print("Even", num)
    else:
        print("Odd", num)