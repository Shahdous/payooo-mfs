// show the cash out form and hide cash money form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    // show cash out button
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
});

// show add money form and hide hte cash out form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    
    // show add money button
    document.getElementById('add-money-form').classList.remove('hidden');

    // hide cash out button
    document.getElementById('cash-out-form').classList.add('hidden');
})