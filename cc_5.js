let employees = [{
    name: "John",
    hourlyRate: 20,
    hoursWorked: 38
}, {
    name: "Jane",
    hourlyRate: 25,
    hoursWorked: 41
}, {
    name: "Doe",
    hourlyRate: 30,
    hoursWorked: 35
}, {
    name: "Doe",
    hourlyRate: 18,
    hoursWorked: 43
}]

function calculateBasePay(rate, hours) {
    return (rate * Math.min(hours, 40)).toFixed(2);
}
function calculateOvertimePay(rate, hours) {
    return (rate * 1.5 * Math.max(hours - 40, 0)).toFixed(2);
}

function calculateTaxes(grossPay) {
    return (grossPay * 0.85).toFixed(2);
}
function processPayroll(employee) {
    const basePay = parseFloat(calculateBasePay(employee.hourlyRate, employee.hoursWorked));
    const overtimePay = parseFloat(calculateOvertimePay(employee.hourlyRate, employee.hoursWorked));
    const grossPay = parseFloat(basePay + overtimePay);
    const netPay = parseFloat(calculateTaxes(grossPay));

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}
 for (let employee of employees) {
    const payroll = processPayroll(employee);
    console.log(`Name: ${payroll.name}\nBase Pay: $${payroll.basePay}\nOvertime Pay: $${payroll.overtimePay}\nGross Pay: $${payroll.grossPay}\nNet Pay: $${payroll.netPay}\n---`);
};

