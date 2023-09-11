function merg(arr,start,mid,end){

    let left = new Array(mid - start + 1);
    let right = new Array(end - mid);

    for (let i = 0; i < left.length;i++)
        left[i] = arr[start+i];
    for (let i = 0; i < right.length;i++)
        right[i] = arr[mid+i+1];

    let idx_l = 0,idx_r = 0;

    while (idx_l < left.length && idx_r < right.length){
        if (left[idx_l] < right[idx_r])
            arr[start++] = left[idx_l++];
        else 
            arr[start++] = right[idx_r++];
    }

    while (idx_l < left.length)
        arr[start++] = left[idx_l++];
    while (idx_r < right.length)
        arr[start++] = right[idx_r++];


}


function mergSort(arr,start,end){
    if (start >= end)
        return;
    
    let mid = Math.floor((start + end) / 2);
    mergSort(arr,start,mid);
    mergSort(arr,mid+1,end);
    merg(arr,start,mid,end);
}