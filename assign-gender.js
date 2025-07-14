function assignGender(cprNumber) {
if (parseInt(String(cprNumber).slice(-1), 10) % 2 === 0) 
    { return "woman" } else 
    { return "man" }; 
}
