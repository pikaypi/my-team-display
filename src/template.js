const fs = require('fs');


const generateCard = (employee) => {
    switch(employee) {
        case employee.getRole() === 'Manager':
            return `<div class="bg-blue-500 col-span-1 grid rounded-t-lg gap-y-1 pb-2 drop-shadow-lg">
                        <div>
                            <h2 class="bg-blue-900 rounded-t-lg p-2 text-blue-100 text-2xl">${employee.name}</h2>
                            <h3 class="bg-blue-900 p-2 text-blue-100 text-xl">Manager</h3>
                        </div>
                        <p class="bg-slate-300 mr-1 ml-1 w-2/3 justify-self-center p-2">Id: ${employee.id}</p>
                        <p class="bg-slate-300 mr-1 ml-1 w-2/3 justify-self-center p-2">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
                        <p class="bg-slate-300 mr-1 ml-1 w-2/3 justify-self-center p-2">Office: ${employee.officeNumber}</p>
                    </div>`
        case employee.getRole() === 'Engineer':
            return `<div class="bg-blue-500 col-span-1 grid rounded-t-lg gap-y-1 pb-2 drop-shadow-lg">
                        <div>
                            <h2 class="bg-blue-900 rounded-t-lg p-2 text-blue-100 text-2xl">${employee.name}</h2>
                            <h3 class="bg-blue-900 p-2 text-blue-100 text-xl">Engineer</h3>
                        </div>
                        <p class="bg-slate-300 mr-1 ml-1 w-2/3 justify-self-center p-2">Id: ${employee.id}</p>
                        <p class="bg-slate-300 mr-1 ml-1 w-2/3 justify-self-center p-2">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
                        <p class="bg-slate-300 mr-1 ml-1 w-2/3 justify-self-center p-2">GitHub: ${employee.github}</p>
                    </div>`
        case employee.getRole() === 'Intern':
            return `<div class="bg-yellow-500 col-span-1 grid rounded-t-lg gap-y-1 pb-2 drop-shadow-lg">
                        <div>
                            <h2 class="bg-yellow-900 rounded-t-lg p-2 text-yellow-100 text-2xl">${employee.name}</h2>
                            <h3 class="bg-yellow-900 p-2 text-yellow-100 text-xl">Engineer</h3>
                        </div>
                        <p class="bg-slate-300 mr-1 ml-1 w-2/3 justify-self-center p-2">Id: ${employee.id}</p>
                        <p class="bg-slate-300 mr-1 ml-1 w-2/3 justify-self-center p-2">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
                        <p class="bg-slate-300 mr-1 ml-1 w-2/3 justify-self-center p-2">GitHub: ${employee.github}</p>
                    </div>`
    }


};

const generateHTML = (employees) => {
    
}