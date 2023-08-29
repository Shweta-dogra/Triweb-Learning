def sum(n1,n2):
    return n1+n2
def subtract(n1,n2):
    return n1-n2
def multiply(n1,n2):
    return n1*n2
def divide(n1,n2):
    return n1/n2

while 1:
    print("1 for addition: ")    
    print("2 for subtraction: ")    
    print("3 for Multiplaction: ")    
    print("4 for Divide: ")    
    print("0 for Exit: ") 
    choice = int(input("Enter a number: "))

    print("Enter two number: ")
    num1 = int(input("Enter first number: "))   
    num2 = int(input("Enter Second number: "))  

    result = 0
    if choice==1:
        result = sum(num1,num2)
    elif choice==2:
        result = subtract(num1,num2)
    elif choice==3:
        result = multiply(num1,num2)
    elif choice==4:
        result = divide(num1,num2)
    elif choice==0:
        break
    else:
        print("Wrong chioce")

    print("Result : ",result)    