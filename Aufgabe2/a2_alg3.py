n=15
A={}
C={}

for i in range(1,n+1):
    A[i]=i

for i in range(1,n+1):
    C[i]=0
    l = range(1,n+1)
    for j in l[::-1]:
        if A[j]>C[i] :
            C[i]=A[j]
print C
print A