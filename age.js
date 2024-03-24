document.getElementById('calculateBtn').addEventListener('click', function() {
    var dob = new Date(document.getElementById('dob').value);
    var currentDate = new Date(document.getElementById('currentDate').value);
    
    var ageYear = currentDate.getFullYear() - dob.getFullYear();
    var ageMonth = currentDate.getMonth() - dob.getMonth();
    var ageDay = currentDate.getDate() - dob.getDate();
    
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth += 12;
    }
    
    if (ageDay < 0) {
      var lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
      ageDay += lastMonthDate.getDate();
      ageMonth--;
    }
    
    var result = "Age: " + ageYear + " years, " + ageMonth + " months, " + ageDay + " days";
    document.getElementById('result').textContent = result;
  });
