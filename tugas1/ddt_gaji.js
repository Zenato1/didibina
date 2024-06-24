function calculateSalary(hoursWorked, overtimeHours) {
    const baseSalary = 50000;
    let regularSalary = baseSalary * hoursWorked;
    let overtimeSalary = 0;
  
    if (overtimeHours > 0) {
      if (overtimeHours >= 1 && overtimeHours <= 2) {
        overtimeSalary = 25000 * overtimeHours;
      } else if (overtimeHours > 2) {
        overtimeSalary = 35000 * overtimeHours;
      }
    }
  
    let totalSalary = regularSalary + overtimeSalary;
  
    if (hoursWorked >= 20) {
      totalSalary += 5000; // bonus for food
    }
  
    return totalSalary;
  }