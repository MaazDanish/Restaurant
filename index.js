async function saveData(event) {
    event.preventDefault();

    const dishes = event.target.dishes.value;
    const price = event.target.price.value;
    const table = event.target.table.value;

    const BillObj = {
        dishes,
        price,
        table
    }

    if (dishes === '' || price === '' || table === '') {
        alert('empty field are not allowed');
    }
    try {
        let res = await axios.post('http://localhost:4000/add-bill', BillObj);
        display(res.data);
    } catch (err) {
        console.log(err);
    }

    event.target.dishes.value = '';
    event.target.price.value = '';
    event.target.table.value = '';

}

async function display(BillObj) {
    const { dishes, price, table } = BillObj;

    //  getting parent element 
    const parent = document.querySelector('#parent');

    //  creatinh child element
    const h2 = document.createElement('h2');
    const li = document.createElement('li');

    h2.textContent = `Table ${table}`;
    li.textContent = dishes + " : " + price;

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
    deleteButton.className = 'btn btn-danger float-end';

    let id = BillObj.id;
    deleteButton.onclick = async () => {
        try {
            let res = await axios.post('http://localhost:4000/add-bill/', { id });
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
        parent.removeChild(h2);
        parent.removeChild(li);
    };

    //  parent element to append child
    li.appendChild(deleteButton);
    parent.appendChild(h2);
    parent.appendChild(li);




}
window.addEventListener('DOMContentLoaded', async () => {
    try {
        let res = await axios.get('http://localhost:4000/add-bill')
        for (var i = 0; i < res.data.length; i++) {
            display(res.data[i]);
        }
    } catch (err) {
        console.log(err);
    }
});