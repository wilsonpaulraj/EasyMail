#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> ar, arr;
    ar = {1 , 3 , 4};
    arr = {1 , 4 , 3};
    if(ar == arr){
        cout<<"Same";
    }
    else{
        cout<<"not same";
    }
}
