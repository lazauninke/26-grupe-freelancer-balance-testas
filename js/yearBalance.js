function yearBalance (selector, data, month) {
    const DOM = document.querySelector(selector);
    
    let HTML = '';

    for (let i = 0; i < data.length; i++){
        const months = month[i];
        const money = data[i];
        data.sort((a, b) => a.month - b.month);

        if(money.income == undefined){
            money.income = 0;
        }
        if(money.expense == undefined){
            money.expense = 0;
        }

        HTML += `
                <div class="table-row">
                <div class="cell">${money.month}</div>
                <div class="cell">${months}</div>
                <div class="cell">${money.income}</div>
                <div class="cell">${money.expense}</div>
                <div class="cell">${money.income - money.expense}</div>
                </div>`;
    }

    DOM.innerHTML += HTML;

}

export { yearBalance }; 