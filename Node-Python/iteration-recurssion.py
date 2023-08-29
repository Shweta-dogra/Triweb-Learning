# Iteration

# for i in range (20):
#     print(i)



# recursion

def recFn(n):
    if(n==0):
        return
    print(n)
    return recFn(n-1)    

recFn(6)