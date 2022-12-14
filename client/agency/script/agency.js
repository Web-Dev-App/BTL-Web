window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('tbWareHouse');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('tblSell');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});


window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('tblValidWarranty');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('listSellMonth');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});


window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('listSellQuarter');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('listNhapMonth');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('listNhapQuarter');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('listNhapYear');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});
window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('listSellYear');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

function sellMonth() {
    getDataMonth();
    getDataSellMonth();
}

function sellQuarter() {
    getDataQuarter();
    getDataSellQuarter();
}

function sellYear() {
    getDataYear();
    getDataSellYear();
}

function nhapMonth() {
    getListDataMonth();
    getDataNhapMonth();
}

function nhapQuarter() {
    getListDataQuarter();
    getDataNhapQuarter();
}

function nhapYear(){
    getListDataYear();
    getDataNhapYear();
}

function logout() {
    sessionStorage.removeItem('token');
    sessionStorage.clear();
}
