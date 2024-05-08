function e(n) {
    if (n === 0) return 1;
    
    let eValue = 1;
    let denominator = 1;
    
    for (let i = 1; i <= n; i++) {
        denominator *= i;
        eValue += 1.0 / denominator;
    }
    
    return eValue;
}