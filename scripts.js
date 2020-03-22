function func(){
    let ans = ['Python','largest railway station','Insects','27 m x 16 m','May 8'];
    let name = ['q1','q2','q3','q4','q5'];
    let i,j;
    let current = 0;
    for(i=0;i<name.length;i++){    //loops the input fields
        let val = document.getElementsByName(name[i]); //get the input field by name
        for(j=0;j<val.length;j++){ //loops the node list
            if(val[j].checked){
                if(val[j].value==ans[i]){ //checks the value of selected value from input with ans array
                    current++;
                    
                }
                else{
                    current = current;
                }
            }
        }
    } 
    window.alert("Your score is "+current);
}

